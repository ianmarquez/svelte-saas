<script lang="ts">
	import { UploadButton, FileCard } from '$lib/components';
	import { Ghost } from 'lucide-svelte';

	export let data;
</script>

<main class="mx-auto max-w-7xl md:p-10">
	<div
		class="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0"
	>
		<h1 class="mb-3 font-bold text-5xl text-gray-900">My Files</h1>
		<UploadButton />
	</div>
	{#if data.files && data.files.length > 0}
		<ul
			class="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 md-grid-cols-2 lg:grid-cols-3"
		>
			{#each data.files as file}
				<FileCard {file} />
			{/each}
		</ul>
	{:else}
		<div class="mt-16 flex flex-col items-center gap-2">
			<Ghost class="h-8 w-8 text-zinc-800" />
			<h3 class="text-xl font-semibold">Pretty empty around here</h3>
			<p>let's upload your first PDF.</p>
		</div>
	{/if}
</main>
