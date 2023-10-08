<script lang="ts">
	import { UploadButton } from '$lib/components';
	import { Ghost, MessageSquare, Plus, TrashIcon } from 'lucide-svelte';
	import { format } from 'date-fns';
	import { buttonVariants } from '$lib/components/ui/button/index.js';

	export let data;
	console.log(data);
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
				<li
					class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
				>
					<a href="/dashboard/{file.id}" class="flex flex-col gap-2" target="_blank">
						<div class="pt-6 px-6 flex w-full items-center justify-between space-x-6">
							<div
								class="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
							/>
							<div class="flex-1 truncate">
								<div class="flex items-center space-x-3">
									<h3 class="truncate text-lg font-medium text-zinc-900">
										{file.name}
									</h3>
								</div>
							</div>
						</div>
					</a>
					<div
						class="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500"
					>
						<div class="flex items-center gap-2">
							<Plus class="h-4 w-4" />
							{format(new Date(file.created), 'MMM yyyy')}
						</div>
						<div class="flex items-center gap-2">
							<MessageSquare class="h-4 w-4" />
							Message
						</div>
						<button
							class={'w-full ' +
								buttonVariants({
									variant: 'destructive',
									size: 'sm'
								})}
						>
							<TrashIcon class="h-4 w-4" />
						</button>
					</div>
				</li>
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
