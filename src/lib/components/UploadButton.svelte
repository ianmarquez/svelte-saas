<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { CloudIcon, FileIcon, UploadIcon } from 'lucide-svelte';
	import toast from 'svelte-french-toast';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import type { UploadButtonFormSchema } from '$lib/schema/UploadButton';
	export let data: SuperValidated<UploadButtonFormSchema>;

	const { form } = superForm(data);

	let files: FileList;
	let fileInput: HTMLInputElement;

	$: if (files) {
		if (files.length > 0 && fileInput) {
			if (files[0].type !== 'application/pdf') {
				toast.error(`File type "${files[0].type}" is not supported`);
				fileInput.value = '';
			} else if (files[0].size > 4 * 1024 * 1024) {
				toast.error(`File size "${(files[0].size / 1000 / 1000).toFixed(2)} MB" is too large`);
				fileInput.value = '';
			}
		}
	}

	function preventDefaults(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
	}

	function onDrop(event: DragEvent) {
		preventDefaults(event);
		const fileList = event.dataTransfer?.files;
		if (fileList && fileList.length > 0) {
			files = fileList;
		}
	}
</script>

<Dialog.Root
	onOpenChange={(status) => {
		if (status === false && fileInput) {
			fileInput.value = '';
		}
	}}
>
	<Dialog.Trigger class={buttonVariants()}>
		Upload PDF
		<UploadIcon class="ml-1.5 h-5 w-5" />
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<div
			class="border h-64 m-4 border-dashed border-gray-300 rounded-lg hover:border-yellow-300 transition-colors duration-300"
		>
			<div class="flex items-center justify-center h-full w-full">
				<label
					for="dropzone"
					on:drop={onDrop}
					on:dragenter={preventDefaults}
					on:dragleave={preventDefaults}
					on:dragover={preventDefaults}
					class="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
				>
					<div class="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
						<CloudIcon class="h-6 w-6 text-zinc-500" />
						<p class="text-sm text-zinc-700">
							<span class="font-semibold">Click to Upload</span> or drag and drop
						</p>
						<p class="text-xs text-zinc-500">PDF (up to 4MB)</p>
					</div>

					{#if files && files[0]}
						<div
							class="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-1 outline-zinc-200 divide-x divide-zinc-200"
						>
							<div class="px-3 py-2 h-full grid place-items center">
								<FileIcon class="h-4 w-4 text-blue-500" />
							</div>
							<div class="px-3 py-2 h-full text-sm truncate">
								{files[0].name} ({(files[0].size / 1000 / 1000).toFixed(2)} MB)
							</div>
						</div>
					{/if}
				</label>
				<input type="file" id="dropzone" class="hidden" bind:files bind:this={fileInput} />
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
