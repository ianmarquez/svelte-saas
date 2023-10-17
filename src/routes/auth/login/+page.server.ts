import { redirect, type Actions } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';
import type { NumericRange } from 'sveltekit-superforms/dist/utils';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { loginFormSchema } from './schema';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/dashboard');
	}
	return {
		form: superValidate(loginFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const { locals } = event;
		const form = await superValidate(event, loginFormSchema);
		if (!form.valid) {
			return message(form, 'Invalid form', { status: 400 });
		}

		try {
			const { email, password } = form.data;
			await locals.pb.collection('users').authWithPassword(email, password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return message(form, 'Please verify your email before logging in', {
					status: 410
				});
			}
		} catch (err: unknown) {
			const clientResponseErr = err as ClientResponseError;
			return message(form, clientResponseErr.message || 'An Error has occurred while logging in', {
				status: (clientResponseErr.status as NumericRange<400, 599>) || 500
			});
		}

		throw redirect(303, '/dashboard');
	}
};
