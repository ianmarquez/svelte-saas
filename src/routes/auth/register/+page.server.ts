import { fail, type Actions } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { registerFormSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(registerFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, registerFormSchema);
		const { locals } = event;
		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			await locals.pb.collection('users').create(form.data);
			await locals.pb.collection('users').requestVerification(form.data.email);
		} catch (err: unknown) {
			if (err instanceof ClientResponseError) {
				return fail(err.status, { form, error: err.message });
			}
			return fail(400, {
				form,
				error: 'An Error has occurred registering user. Please try again later'
			});
		}
		return { form, success: true };
	}
};
