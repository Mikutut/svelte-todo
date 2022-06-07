<script lang="ts" context="module">
  interface INavbarButton {
    key: string;
		className?: string;
    caption: string;
    icon?: IconDefinition;
    iconScale?: number;
    onClick: () => void;
  }

  export type { INavbarButton };
</script>

<script lang="ts">
  import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
  import { Icon } from "svelte-awesome";

  export let buttons: INavbarButton[];
</script>

<nav id="main-navbar">
  {#each buttons as btn (btn.key)}
    <button
			class="{`navbar-button${(btn.className !== undefined) ? ` ${btn.className}` : ""}`}"
			on:click="{() => btn.onClick()}"
		>
      {#if btn.icon !== undefined}
        <Icon
          data={btn.icon}
          scale={btn.iconScale ?? 2}
        />
      {/if}
      <span
        class={(btn.icon !== undefined) ? "with-icon" : ""}
      >{ btn.caption }</span>
    </button>
  {/each}
</nav>

<style lang="scss">
  @import "../styles/Button.scss";

  #main-navbar {
		height: 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
	:global(.navbar-button) {
		@include button(1.25rem);
		margin: 0.5rem;
	}

  @media screen and (max-width: 768px) {
    #main-navbar {
			height: auto;
      flex-flow: column nowrap;
      width: 100%;
    }
		:global(.navbar-button) {
			width: 100%;
			margin: 0;
			border-radius: 0;
		}
  }
</style>
