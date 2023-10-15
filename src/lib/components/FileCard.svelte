<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import type { FilesResponse } from '$lib/types/pocketbase-types';
	import { format } from 'date-fns';
	import { Loader2, MessageSquare, Plus, TrashIcon } from 'lucide-svelte';
	import { buttonVariants } from './ui/button';
	import toast from 'svelte-french-toast';

	export let file: FilesResponse;
	let loading: boolean = false;
	let deleted: boolean = false;
	$: loading;
	$: deleted;

	async function deleteProject(id: string) {
		try {
			loading = true;
			await fetch(`/api/files/${id}`, {
				method: 'GET'
			});
			toast.success(`File "${file.name}" was successfully deleted`);
			deleted = true;
		} catch (err) {
			toast.error(`Failed to delete "${file.name}". Please try again later`);
		} finally {
			loading = false;
		}
	}
</script>

{#if !deleted}
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
		<div class="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
			<div class="flex items-center gap-2">
				<Plus class="h-4 w-4" />
				{format(new Date(file.created), 'MMM yyyy')}
			</div>
			<div class="flex items-center gap-2">
				<MessageSquare class="h-4 w-4" />
				Message
			</div>

			<AlertDialog.Root>
				<input type="hidden" name="id" value={file.id} />
				<AlertDialog.Trigger
					disabled={loading}
					class={'w-full ' +
						buttonVariants({
							variant: 'destructive',
							size: 'sm'
						})}
				>
					{#if loading}
						<Loader2 class="h-4 w-4 animate-spin" />
					{:else}
						<TrashIcon class="h-4 w-4" />
					{/if}
				</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Header>
						<AlertDialog.Title>
							Are you sure you want to delete "{file.name}"?
						</AlertDialog.Title>
						<AlertDialog.Description>
							This action cannot be undone. This will permanently delete the file and remove it from
							our servers.
						</AlertDialog.Description>
					</AlertDialog.Header>
					<AlertDialog.Footer>
						<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
						<AlertDialog.Action on:click={() => deleteProject(file.id)}>Continue</AlertDialog.Action
						>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</div>
	</li>
{/if}
