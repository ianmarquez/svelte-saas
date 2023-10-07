<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { type LoginFormSchema, loginFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<LoginFormSchema>;
</script>

<div class="flex flex-col md:flex-row w-full top-0 bottom-0 fixed left-0 right-0 bg-white grainy">
	<div
		class="h-1/2 md:w-1/2 md:h-full w-full bg-black inset-0 bg-cover"
		style="
    background-image:
      url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
	/>
	<div class="md:w-1/2 h-1/2 w-full flex flex-row items-center justify-center md:h-full md:px-16">
		<Form.Root
			method="POST"
			{form}
			schema={loginFormSchema}
			let:config
			class="md:h-fit w-full h-full bg-white px-8 py-5 md:px-16 md:py-10 md:rounded-lg md:shadow-lg flex flex-col gap-4 max-w-4xl"
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
			<Form.Button>Submit</Form.Button>
			<span class="text-zinc-700 text-center">
				Not yet a member?
				<a
					href="/register"
					class="underline hover:text-zinc-700 text-blue-700 transition-colors duration-300"
					>Sign up</a
				>
			</span>
		</Form.Root>
	</div>
</div>
