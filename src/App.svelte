<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import RoutesWrapper from "./components/RoutesWrapper.svelte";
	import TodosContext from "./components/TodosContext.svelte";

	import HomeRoute from "./routes/HomeRoute.svelte";
	import AddTodoRoute from "./routes/AddTodoRoute.svelte";
	import CompletedTodosRoute from "./routes/CompletedTodosRoute.svelte";
	import AboutRoute from "./routes/AboutRoute.svelte";
	import NoMatchRoute from "./routes/NoMatchRoute.svelte";
</script>

<Router 
  basepath={import.meta.env.BASE_URL}
>
  <main>
    <RoutesWrapper>
			<TodosContext>
				<Route path="/">
					<HomeRoute />
				</Route>
				<Route path="/add-todo">
					<AddTodoRoute />
				</Route>
				<Route path="/completed">
					<CompletedTodosRoute />
				</Route>
			</TodosContext>
			<Route path="/about">
				<AboutRoute />
			</Route>
			<Route>
				<NoMatchRoute />
			</Route>
    </RoutesWrapper>
  </main>
</Router>

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    scroll-behavior: smooth;

		&::-webkit-scrollbar {
			background-color: transparent;
			width: 8px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #ff9f00;
		}
  }
  :global(:root) {
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 400;
  }
  :global(html, body, #app-root) {
    width: 100vw;
    height: 100vh;
  }
  :global(a) {
    color: inherit;
  }
  main {
    width: 100vw;
    height: 100vh;
    background-color: #00243b;
  }

  @media screen and (min-width: 769px) {
    :global(a) {
      transition: color 0.2s;

      &:hover {
        cursor: pointer;
        color: #ff9f00;
      }
    }
  }
  @media screen and (max-width: 768px) {
    :global(a) {
      color: #ff9f00;
    }
  }
</style>
