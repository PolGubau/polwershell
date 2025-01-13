<script lang="ts">
	import Header from '../components/console/Header.svelte';
	import Messages from '../components/console/Messages.svelte';
	import { activeTab } from '../stores';
	import type { ConsoleTab } from '../db';

	let currentTab: ConsoleTab | null;

	// Suscribirse a la store
	$: activeTab.subscribe((tab) => {
		currentTab = tab;
	});
</script>

<section class="wrapper bg-stone-950 shadow-2xl">
	<Header />
	<article>
		<Messages messages={currentTab?.messages ?? []} />

		<footer class="grid w-full grid-cols-[auto,1fr] gap-2">
			C:\Users\pol.gubau\dev\other\polwershell (main) >
			<form action="" class="w-full">
				<input type="text" />
			</form>
		</footer>
	</article>
</section>

<style>
	input {
		background-color: transparent;
		width: 100%;
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
	}
</style>
