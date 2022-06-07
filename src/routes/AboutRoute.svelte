<script lang="ts">
	import RouteContainer from "../components/RouteContainer.svelte";
</script>

<RouteContainer>
	<div class="route-content">
		<header>
			<h1>A fully functional todo app created with Svelte</h1>
			<h2>Because why not</h2>
		</header>
		<section id="about-app-features">
			<h1>This todo app features</h1>
			<ul>
				<li>Functional adding, marking as complete/incomplete and deleting todos</li>
				<li>Saving todos to local storage on page exit and loading them back after going back</li>
				<li>(Somewhat) slick design</li>
				<li>yes</li>
			</ul>
		</section>
		<section id="about-app-tech-stack">
			<h1>Technologies used in this app</h1>
			<ul>
				<li><a href="https://svelte.dev" target="_blank">Svelte</a></li>
				<li><a href="https://typescriptlang.org" target="_blank">TypeScript</a></li>
				<li><a href="https://vitejs.dev" target="_blank">Vite</a></li>
				<li><a href="https://sass-lang.com" target="_blank">Sass (SCSS)</a></li>
			</ul>
		</section>
		<section id="about-learn-more">
			<h1>You can learn more about me <a href="https://mikut.dev">here</a>.</h1>
		</section>
		<footer>
			<h3><a href="https://mikut.dev">Mikut</a> 2020-2022</h3>
		</footer>
	</div>
</RouteContainer>

<style lang="scss">
	.route-content {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr 1fr auto auto;
		place-items: center;
	}
	header, section, footer {
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		margin: 1rem;
	}
	h1, h2, h3 {
		width: 100%;
		text-align: center;
		margin: 0.25rem;
	}
	h1 {
		font-size: 2rem;
		font-weight: 700;
	}
	h2 {
		font-size: 1.2rem;
	}
	h3 {
		font-size: 0.8rem;
		font-weight: 100;
	}
	ul {
		list-style-type: disc;
		list-style-position: outside;
		margin: 1rem;

		& > li {
			overflow: visible;
			display: list-item;
			font-size: 1.1rem;
			font-weight: 100;
			margin: 1rem;
			text-align: left;
			width: 300px;
		}
	}
</style>