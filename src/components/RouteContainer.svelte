<script lang="ts">
  import { fly } from "svelte/transition";
	import MainHeader from "../components/MainHeader.svelte";
</script>

<div 
  class="route"
  transition:fly="{{ y: 50, duration: 200 }}"
>
	<MainHeader />
	<slot />
</div>

<style lang="scss">
  :global(.route) {
		height: 100%;
    width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		overflow: auto;
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr;
  }
	:global(#main-header) {
    & > :global(#main-navbar) {
      margin-top: 2rem;
    }
	}
  :global(.route-content) {
		height: 100%;
		width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
		overflow: visible;
  }

	@media screen and (max-width: 768px) {
		:global(#main-header) {
			& > :global(#main-navbar) {
				margin-top: 0;
			}
		}
	}
</style>
