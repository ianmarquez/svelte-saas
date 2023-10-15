<script lang="ts">
	import { PDFRenderer } from '$lib/components';
	import { ChatWrapper } from '$lib/components';
	export let data;
</script>

<div class="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
	<div class="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
		<div class="flex-1 xl:flex">
			<div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
				<PDFRenderer />
			</div>
		</div>
		<div class="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
			<ChatWrapper />
		</div>
	</div>
</div>
