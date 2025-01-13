<script lang="ts">
	import { browser } from '$app/environment';
	import { db, addNewTab, type ConsoleTab } from '../../db';
	import { liveQuery } from 'dexie';
	import { activeTab } from '../../stores';
	// Obtener las pestañas reactivamente
	$: tabs = liveQuery(() => (browser ? db.consoleTab.toArray() : []));

	// Seleccionar una pestaña y actualizar el estado de la pestaña activa
	const selectTab = (tab: ConsoleTab) => {
		activeTab.set(tab);
	};

	// Usar la store activa en una variable reactiva
	$: selectedTab = $activeTab;

	// Función para verificar si una pestaña es la activa
	const isActive = (tab: ConsoleTab) => tab.id === selectedTab?.id;
</script>

<header>
	<ul class="tabs-wrapper">
		{#each $tabs as tab}
			<li class="flex items-center gap-1">
				<button class:selected={isActive(tab)} onclick={() => selectTab(tab)}>{tab.name}</button>
				<button class="add-new-button" onclick={() => addNewTab('new')}>x</button>
			</li>
		{/each}
	</ul>
	<div>
		<button class="add-new-button" onclick={() => addNewTab('new')}>+</button>
	</div>
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
				button {
					padding: 2px 5px;
					border-radius: 10px;
					&.selected {
						background-color: #ffffff;
						color: #000000;
					}
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
