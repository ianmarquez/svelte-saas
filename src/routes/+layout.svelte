<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import { Navbar } from '$lib/components';
	import '../app.postcss';
	export let data;
</script>

<svelte:head>
	<title>quill.</title>
	<meta name="description" content="Your pdf notes companion" />
</svelte:head>

<Toaster />

<div class="light min-h-screen font-sans antialiased">
	<Navbar user={data.user} />
	<main>
		<slot />
	</main>
</div>
