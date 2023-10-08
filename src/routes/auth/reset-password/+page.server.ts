import type { ClientResponseError } from 'pocketbase';
import type { NumericRange } from 'sveltekit-superforms/dist/utils';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { resetPasswordSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(resetPasswordSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, resetPasswordSchema);
		const { locals } = event;
		if (!form.valid) {
			return message(form, 'Invalid Form', { status: 400 });
		}
		try {
			await locals.pb.collection('users').requestPasswordReset(form.data.email);
		} catch (err: unknown) {
			const clientResponseErr = err as ClientResponseError;
			return message(
				form,
				'An error has occured while requesting password reset. Please try again later.',
				{
					status: (clientResponseErr.status as NumericRange<400, 599>) || 400
				}
			);
		}
		return message(form, 'Valid form');
	}
};
