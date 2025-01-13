<script>
	import ConsoleHeader from '../components/ConsoleHeader.svelte';

	const items = [
		{ name: 'item 1', qty: 1 },
		{ name: 'item 2', qty: 2 },
		{ name: 'item 3', qty: 3 },
		{ name: 'item 4', qty: 4 },
		{ name: 'item 5', qty: 5 }
	];
</script>

<section class="wrapper bg-stone-950 shadow-2xl">
	<ConsoleHeader />
	<article>
		<ul>
			{#each items as item}
				<li>{item.name} x {item.qty}</li>
			{/each}
		</ul>
		<footer class="flex gap-1">
			C:\Users\pol.gubau\dev\other\polwershell (main) >
			<form action="">
				<input type="text" />
			</form>
		</footer>
	</article>
</section>

<style>
	input {
		background-color: transparent;
	}
	.wrapper {
		overflow: hidden;
		--min-width: 926px;
		--min-height: 480px;
		--wrapper-padding: 2rem;
		height: min(var(--min-height), 100% - (var(--wrapper-padding) * 2));
		width: min(var(--min-width), 100% - (var(--wrapper-padding) * 2));
		margin-inline: auto;
		display: grid;
		grid-template-rows: auto 1fr;
		border-radius: 10px;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 15px;
		ul {
			display: flex;
			overflow-y: scroll;
			height: fit-content;
			justify-content: end;
			flex-direction: column;
			height: 100%;
		}
	}
</style>
