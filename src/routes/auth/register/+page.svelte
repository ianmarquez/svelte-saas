<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { type RegisterFormSchema, registerFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<RegisterFormSchema>;
</script>

<Form.Root
	method="POST"
	{form}
	schema={registerFormSchema}
	let:config
	class="md:h-fit w-full h-full bg-white px-8 py-5 md:px-16 md:py-10 md:rounded-lg md:shadow-lg flex flex-col gap-4 max-w-4xl"
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

	<Form.Button>Register</Form.Button>
	<span class="text-zinc-700 text-center">
		Already a member?
		<a
			href="/auth/login"
			class="underline hover:text-zinc-700 text-blue-700 transition-colors duration-300">Sign In</a
		>
	</span>
</Form.Root>
