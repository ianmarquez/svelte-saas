<script>
	import { MaxWidthWrapper } from '$lib/components';
	import { ArrowRight } from 'lucide-svelte';
</script>

<MaxWidthWrapper
	className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"
>
	<div
		class="transition-all hover:border-gray-300 hover:bg-white/50 mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur"
	>
		<p class="text-sm font-semibold text-gray-700">Quill is now public!</p>
	</div>
	<h1 class="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
		Chat with your <span class="text-blue-600">documents</span> in seconds
	</h1>
	<p class="mt-5 max-w-prose text-zinc-700 sm:text-lg">
		Quill allows you to have conversations with any PDF document. Simply upload your file and start
		askng questions right away.
	</p>
	<a href="/dashboard" target="_blank">Get started <ArrowRight class="h-5 w-5 ml-2" /></a>
</MaxWidthWrapper>
