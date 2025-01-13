<script lang="ts">
	import type { Message } from '../../db';

	const { messages }: { messages: Message[] } = $props();
</script>

<ul>
	{#if messages && messages.length > 0}
		{#each messages as item}
			<li>{item.text}</li>
		{/each}
	{:else}
		<li>No hay mensajes.</li>
	{/if}
</ul>

<style>
	ul {
		display: flex;
		overflow-y: scroll;
		height: fit-content;
		justify-content: end;
		flex-direction: column;
		height: 100%;
	}
</style>
