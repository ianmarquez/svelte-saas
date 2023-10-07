<script>
	import { ArrowRight } from 'lucide-svelte';
	import { MaxWidthWrapper } from '.';
	import { buttonVariants } from './ui/button';
</script>

<nav
	class="sticky h-14 inset-x-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
>
	<MaxWidthWrapper>
		<div class="flex h-14 items-center justify-between border-b border-zinc-200">
			<a href="/" class="flex z-40 font-semibold"><span>quill.</span></a>
			<div class="hidden items-center space-x-4 sm:flex">
				<a
					href="/pricing"
					class={buttonVariants({
						variant: 'ghost',
						size: 'sm'
					})}>Pricing</a
				>
				<a href="/auth/login" class={buttonVariants({ variant: 'ghost', size: 'sm' })}>Sign In</a>
				<a href="/auth/register" class={buttonVariants({ size: 'sm' })}>
					Get Started <ArrowRight class="ml-1.5 h-5 w-5" />
				</a>
			</div>
		</div>
	</MaxWidthWrapper>
</nav>
