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
		class="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	>
		<div
			style="clip-path:polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"
			class={clsx(
				'relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]',
				'bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
			)}
		/>
	</div>
	<div>
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mt-16 flow-root sm:mt-24">
				<div
					class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
				>
					<img
						src="/dashboard-preview.jpg"
						alt="product preview"
						class="rounded-md bg-white p-2 sm:p-2 md:p-20 shadhow-2xl ring-1 ring-gray-900/10"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
	<div class="mb-12 px-6 lg:px-8">
		<div class="mx-auto max-w-2xl sm:text-center">
			<h2 class="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">Start chatting in minutes</h2>
			<p class="mt-4 text-lg text-gray-600">
				Chatting to your PDF files has never been easier than Quill.
			</p>
		</div>
	</div>
	<ol class="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
		<li class="md:flex-1">
			<div
				class="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4"
			>
				<span class="text-sm font-medium text-blue-600">Step 1</span>
				<span class="text-xl font-semibold">Sign up for an account</span>
				<span class="mt-2 text-zinc-700">
					Either starting out with a free plan or choose our <a
						href="/pricing"
						class="text-blue-700 underline underline-offset-2">pro plan</a
					>.
				</span>
			</div>
		</li>
		<li class="md:flex-1">
			<div
				class="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4"
			>
				<span class="text-sm font-medium text-blue-600">Step 2</span>
				<span class="text-xl font-semibold">Upload your PDF file</span>
				<span class="mt-2 text-zinc-700">
					We'll process your file and make it ready for you to chat with.
				</span>
			</div>
		</li>
		<li class="md:flex-1">
			<div
				class="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4"
			>
				<span class="text-sm font-medium text-blue-600">Step 3</span>
				<span class="text-xl font-semibold">Start asking questions</span>
				<span class="mt-2 text-zinc-700">
					It's that simple. Try out Quill today - it really takes less that a minute.
				</span>
			</div>
		</li>
	</ol>
	<div class="mx-auto max-w-6xl px-6 lg:px-8">
		<div class="mt-16 flow-root sm:mt-24">
			<div
				class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
			>
				<img
					src="/file-upload-preview.jpg"
					alt="uploading preview"
					class="rounded-md bg-white p-2 sm:p-2 md:p-20 shadhow-2xl ring-1 ring-gray-900/10"
				/>
			</div>
		</div>
	</div>
</div>
