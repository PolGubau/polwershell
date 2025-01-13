<script lang="ts">
	import { browser } from '$app/environment';
	import { db, addNewTab } from '../db';
	import { liveQuery } from 'dexie';

	$: tabs = liveQuery(() => (browser ? db.consoleTab.toArray() : []));
</script>

<header>
	<ul class="tabs-wrapper">
		{#each $tabs as tab}
			<li>
				<h2>{tab.name}</h2>
			</li>
		{/each}
	</ul>
	<button class="add-new-button" onclick={() => addNewTab('new')}>+</button>
</header>

<style>
	header {
		width: 100%;
		background-color: #292929;
		display: flex;
		padding: 10px 20px;
		align-items: center;
		gap: 10px;
		border-bottom: #000000 1px solid;

		.tabs-wrapper {
			display: flex;
			gap: 10px;
			li {
				h2 {
					padding: 2px 5px;
					border-radius: 10px;
					cursor: pointer;
					&:hover {
						background-color: #c3c3c3;
						color: #ffffff;
					}
				}
			}
		}
		.add-new-button {
			padding: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			width: 30px;
			height: 30px;
			cursor: pointer;
			&:hover {
				background-color: rgba(0, 0, 0, 0.714);
			}
		}
	}
</style>
