import { fail, type Actions, error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { loginFormSchema } from './schema';
import { ClientResponseError } from 'pocketbase';

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(loginFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, loginFormSchema);
		if (!form.valid) {
			return fail(400, { form });
		}
		return {
			form
		};
	}
};
