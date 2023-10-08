<script lang="ts">
	import { Navbar } from '$lib/components';
	import '../app.postcss';
	export let data;
</script>

<svelte:head>
	<title>quill.</title>
	<meta name="description" content="Your pdf notes companion" />
</svelte:head>

<div class="light min-h-screen font-sans antialiased">
	<Navbar user={data.user} />
	<main>
		<slot />
	</main>
</div>
