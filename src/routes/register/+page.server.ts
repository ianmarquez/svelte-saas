import { fail, type Actions } from '@sveltejs/kit';
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
		if (!form.valid) {
			return fail(400, { form });
		}

		return {
			form
		};
	}
};
