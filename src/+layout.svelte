<script lang="ts">
	import { Navbar } from '$lib/components';
	import '../app.postcss';
</script>

<svelte:head>
	<title>quill.</title>
	<meta name="description" content="Your pdf notes companion" />
</svelte:head>

<div class="light min-h-screen font-sans antialiased">
	<Navbar />
	<main>
		<slot />
	</main>
</div>
