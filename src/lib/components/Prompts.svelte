<script lang="ts">
	import clsx from 'clsx';

	export let type: 'info' | 'success' | 'warning' | 'error' = 'info';

	let colorClass = '';
	switch (type) {
		case 'info':
			colorClass = clsx('bg-blue-200', 'border-blue-400', 'text-blue-600');
			break;
		case 'warning':
			colorClass = clsx('bg-yellow-200', 'border-yellow-400', 'text-yellow-600');
			break;
		case 'success':
			colorClass = clsx('bg-green-200', 'border-green-400', 'text-green-600');
			break;
		default:
			colorClass = clsx('bg-red-200', 'border-red-400', 'text-red-600');
			break;
	}
</script>

<span
	class={clsx(
		colorClass,
		'font-semibold text-center px-8 py-4 rounded-lg border-solid border-[1px] relative'
	)}
>
	<slot />
</span>
