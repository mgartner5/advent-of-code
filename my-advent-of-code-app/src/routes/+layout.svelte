<script lang="ts">
	import './layout.css';
	import Popup from '$lib/components/Popup.svelte';

	const { children } = $props();
</script>

<div class="min-h-screen bg-slate-600 p-4">
	{@render children()}
</div>

<Popup />
