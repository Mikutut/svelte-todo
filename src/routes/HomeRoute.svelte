<script lang="ts">
	import RouteContainer from "../components/RouteContainer.svelte";
	import IncompleteTodos from "../components/IncompleteTodos.svelte";
</script>

<RouteContainer>
	<div class="route-content">
		<IncompleteTodos />
	</div>
</RouteContainer>

<style lang="scss">
	.route-content {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: flex-start;
	}
</style>