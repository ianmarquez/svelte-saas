<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { type RegisterFormSchema, registerFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<RegisterFormSchema>;
	let loading = false;
	let showSuccess = false;
	let errorMessage = '';
	$: showSuccess;
	$: loading;
	$: errorMessage;
</script>

<Form.Root
	method="POST"
	{form}
	schema={registerFormSchema}
	let:config
	options={{
		onSubmit: () => {
			loading = true;
			showSuccess = false;
			errorMessage = '';
		},
		onResult: ({ result }) => {
			if (result.data.error) {
				errorMessage =
					result.data.error || 'An error has occurred creating the user, please try again later.';
			} else if (result.data.success) {
				showSuccess = true;
			}
			loading = false;
		}
	}}
	class="md:h-fit w-full h-full bg-white px-8 py-5 md:p-16 md:rounded-lg md:shadow-xl flex flex-col gap-4 max-w-4xl"
>
	<h2 class="text-2xl md:text-4xl font-bold text-center">Register</h2>
	<Form.Field {config} name="username">
		<Form.Item>
			<Form.Label>Username</Form.Label>
			<Form.Input type="text" placeholder="Username" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input type="text" placeholder="Name" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
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
	<Form.Field {config} name="passwordConfirm">
		<Form.Item>
			<Form.Label>Confirm Password</Form.Label>
			<Form.Input type="password" placeholder="Password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button disabled={loading}>Register</Form.Button>
	{#if showSuccess}
		<span
			class="text-green-600 text-center px-8 py-4 rounded-lg border-green-600 bg-green-200 border-solid border-[1px]"
			>Successfully registered! Please wait for your verification email.</span
		>
	{/if}
	{#if errorMessage}
		<span
			class="text-red-600 text-center px-8 py-4 rounded-lg border-red-600 bg-red-200 border-solid border-[1px]"
		>
			{errorMessage}
		</span>
	{/if}
	<span class="text-zinc-700 text-center">
		Already a member?
		<a
			href="/auth/login"
			class="underline hover:text-zinc-700 text-blue-700 transition-colors duration-300">Sign In</a
		>
	</span>
</Form.Root>
