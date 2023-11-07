<script lang="ts">
	import type { Files } from '$lib/types/form';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { CloudIcon, FileIcon, UploadIcon } from 'lucide-svelte';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
	import { Progress } from './ui/progress';

	let uploading = false;
	let uploadProgress = 0;
	$: uploading;
	$: uploadProgress;
	let files: Files = {
		accepted: [],
		rejected: []
	};

	function startSimulatedProgress() {
		uploadProgress = 0;
		const interval = setInterval(() => {
			if (uploadProgress >= 95) {
				clearInterval(interval);
				return;
			}
			uploadProgress += 5;
		}, 500);
		return interval;
	}

	function handleFilesSelect(e: any) {
		uploading = true;
		const uploadInterval = startSimulatedProgress();
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = acceptedFiles as File[];
		files.rejected = fileRejections as File[];

		try {
		} catch (err) {
		} finally {
			uploading = false;
			clearInterval(uploadInterval);
		}
	}
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants()}>
		Upload PDF
		<UploadIcon class="ml-1.5 h-5 w-5" />
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px] p-8">
		<Dropzone
			containerClasses="border h-64 border-dashed border-2 border-gray-300 rounded-lg hover:border-yellow-300 hover:bg-gray-100 transition-colors duration-300"
			on:drop={handleFilesSelect}
			disableDefaultStyles
			accept="application/pdf"
			inputElement="file"
		>
			<label
				for="file"
				class="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 transition-colors duration-300"
			>
				<div class="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
					<CloudIcon class="h-6 w-6 text-zinc-500" />
					<p class="text-sm text-zinc-700">
						<span class="font-semibold">Click to Upload</span> or drag and drop
					</p>
					<p class="text-xs text-zinc-500">PDF (up to 4MB)</p>
				</div>

				{#if files.accepted.length > 0}
					<div
						class="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-1 outline-zinc-200 divide-x divide-zinc-200"
					>
						<div class="px-3 py-2 h-full grid place-items center">
							<FileIcon class="h-4 w-4 text-blue-500" />
						</div>
						<div class="px-3 py-2 h-full text-sm truncate text-zinc-500">
							{files.accepted[0].name}
						</div>
					</div>
				{/if}
				{#if uploading}
					<div class="w-full mt-4 max-w-xs mx-auto">
						<Progress value={uploadProgress} class="h-1 w-full bg-zinc-200" />
					</div>
				{/if}
			</label>
		</Dropzone>
	</Dialog.Content>
</Dialog.Root>
