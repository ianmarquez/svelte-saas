<script>
	import { MaxWidthWrapper } from '$lib/components';
	import { buttonVariants } from '$lib/components/ui/button';
	import clsx from 'clsx';
	import { ArrowRight } from 'lucide-svelte';
</script>

<MaxWidthWrapper
	className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"
>
	<div
		class={clsx(
			'transition-all hover:border-gray-300 hover:bg-white/50 mx-auto mb-4 flex max-w-fit items-center justify-center ',
			'space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur'
		)}
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
	<a
		href="/dashboard"
		target="_blank"
		class={buttonVariants({
			size: 'lg',
			className: 'mt-5'
		})}>Get started <ArrowRight class="h-5 w-5 ml-2" /></a
	>
</MaxWidthWrapper>

<div class="relative isolate">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80"
	>
		<div
			style="clip-path:polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"
			class={clsx(
				'relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]',
				'bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
			)}
		/>
	</div>
	<div>
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mt-16 flow-root sm:mt-24">
				<div
					class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
				>
					<img src="/dashboard.jpg" alt="product preview" />
				</div>
			</div>
		</div>
	</div>
</div>
