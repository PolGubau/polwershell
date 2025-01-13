<script lang="ts">
	import { onMount } from 'svelte';
 
	let input = '';
	let output: string[] = [];

	onMount(async () => {
		const history = await getHistory();
		output = history.flatMap((entry) => entry.output);
	});

	function handleCommand() {
		if (input.trim() === 'help') {
			output = [...output, 'Available commands: help, clear, sum, etc.'];
		} else if (input.startsWith('sum')) {
			const nums = input.split(' ').slice(1).map(Number);
			const sum = nums.reduce((a, b) => a + b, 0);
			output = [...output, `Result: ${sum}`];
		} else {
			output = [...output, `Unknown command: ${input}`];
		}
		saveHistory(output);
		input = '';
	}

	function clearConsole() {
		output = [];
		saveHistory(output);
	}
</script>
