<script lang="ts">
  import { useNavigate, useLocation } from "svelte-navigator";
	import Navbar from "./Navbar.svelte";
	import type { INavbarButton } from "./Navbar.svelte";

  const navigate = useNavigate();
	const location = useLocation();

  const navButtons: INavbarButton[] = [
    {
      key: "main-navbar-home",
      caption: "Active to-dos",
			className: ($location.pathname === "/") ? "active" : undefined,
      onClick: () => navigate("/")
    },
		{
			key: "main-navbar-add-todo",
			caption: "Add to-do",
			className: ($location.pathname === "/add-todo") ? "active" : undefined,
			onClick: () => navigate("/add-todo")
		},
		{
			key: "main-navbar-completed",
			caption: "Completed to-dos",
			className: ($location.pathname === "/completed") ? "active" : undefined,
			onClick: () => navigate("/completed")
		},
    {
      key: "main-navbar-about",
      caption: "About",
			className: ($location.pathname === "/about") ? "active" : undefined,
      onClick: () => navigate("/about")
    }
  ];
</script>

<header id="main-header">
	<div id="main-header-labels">
		<h1>Svelte To-Do</h1>
		<h2>Simple to-do app created with <a href="https://svelte.dev">Svelte</a></h2>
	</div>
	<Navbar
		buttons={navButtons}
	/>
</header>

<style lang="scss">
	:global(.active) {
		background-color: #c47a00;
	}

  #main-header {
		height: 300px;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
    color: white;
		flex: 1 0 auto;
  }
	#main-header-labels {
		width: 100%;

    & > h1 {
      font-size: 3rem;
    }
    & > h2 {
      font-weight: 100;
    }
	}

	@media screen and (max-width: 768px) {
		#main-header {
			height: 400px;
		}
		#main-header-labels {
			margin-bottom: 1rem;
		}
	}
</style>
