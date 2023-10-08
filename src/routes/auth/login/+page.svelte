<script lang="ts">
	import { Prompts } from '$lib/components';
	import * as Form from '$lib/components/ui/form';
	import { type LoginFormSchema, loginFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<LoginFormSchema>;
	let loading: boolean = false;
	let errorMessage: string = '';
	let verified: boolean = true;

	$: errorMessage;
	$: loading;
	$: verified;
</script>

<Form.Root
	method="POST"
	{form}
	schema={loginFormSchema}
	let:config
	options={{
		onSubmit: () => {
			loading = true;
			errorMessage = '';
		},
		onResult: ({ result }) => {
			if (result.type === 'failure') {
				if (result.status !== 410) {
					errorMessage = result.data.form.message;
				} else {
					verified = false;
				}
			}
			loading = false;
		}
	}}
	class="md:h-fit w-full h-full bg-white px-8 py-5 md:px-16 md:py-10 md:rounded-lg md:shadow-xl flex flex-col gap-4 max-w-4xl"
>
	<h2 class="text-2xl md:text-4xl font-bold text-center">Sign In</h2>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input type="text" placeholder="Email" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label>Password</Form.Label>
			<Form.Input type="password" placeholder="Password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	{#if !verified}
		<Prompts type="warning">
			Please verify your email before logging in. If you haven't received your verification email <a
				href="/auth/resend-verification"
				class="underline text-blue-700">click here</a
			> to resend
		</Prompts>
	{/if}
	{#if errorMessage}
		<Prompts type="error">
			{errorMessage}
		</Prompts>
	{/if}
	<Form.Button disabled={loading}>Sign In</Form.Button>
	<span class="text-center">
		<a
			href="/auth/reset-password"
			class="underline hover:text-zinc-700 text-blue-700 transition-colors duration-300"
			>Forgot your password?
		</a>
	</span>
	<span class="text-zinc-700 text-center">
		Not yet a member?
		<a
			href="/auth/register"
			class="underline hover:text-zinc-700 text-blue-700 transition-colors duration-300">Sign up</a
		>
	</span>
</Form.Root>
