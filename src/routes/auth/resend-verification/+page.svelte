<script lang="ts">
	import { Prompts } from '$lib/components';
	import * as Form from '$lib/components/ui/form';
	import { type RequestVerificationFormSchema, requestVerificationFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<RequestVerificationFormSchema>;
	let loading: boolean = false;
	let errorMessage: string = '';
	let showSuccess: boolean = false;

	$: errorMessage;
	$: loading;
	$: showSuccess;
</script>

<Form.Root
	method="POST"
	{form}
	schema={requestVerificationFormSchema}
	let:config
	options={{
		onSubmit: () => {
			loading = true;
			errorMessage = '';
		},
		onResult: ({ result }) => {
			if (result.type === 'failure') {
				errorMessage = result.data.form.message;
			} else if (result.type === 'success') {
				showSuccess = true;
			}
			loading = false;
		}
	}}
	class="md:h-fit w-full h-full bg-white px-8 py-5 md:px-16 md:py-10 md:rounded-lg md:shadow-xl flex flex-col gap-4 max-w-4xl"
>
	<h2 class="text-2xl md:text-4xl font-bold text-center">Request Verification</h2>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input type="text" placeholder="Email" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	{#if showSuccess}
		<Prompts type="success">Your verification email has been sent.</Prompts>
	{/if}

	{#if errorMessage}
		<Prompts type="error">
			{errorMessage}
		</Prompts>
	{/if}
	<Form.Button disabled={loading}>Request Verification</Form.Button>
	<span class="text-zinc-700 text-center">
		Already verified?
		<a
			href="/auth/login"
			class="underline hover:text-zinc-700 text-blue-700 transition-colors duration-300">Login</a
		>
	</span>
</Form.Root>
