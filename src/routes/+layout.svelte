<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	const { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="grid min-h-screen w-screen place-items-center bg-stone-700 text-white">
		{@render children()}
	</div>
</ParaglideJS>
