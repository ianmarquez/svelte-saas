import type { FilesResponse } from '$lib/types/pocketbase-types';
import { error, redirect, type Actions } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.pb.authStore.isValid === false || !locals.user) {
		throw redirect(303, '/auth/login?redirect=/dashboard');
	}

	const getUserFiles = async (userId: string) => {
		try {
			const files = await locals.pb.collection('files').getFullList<FilesResponse>(undefined, {
				filter: `user="${userId}"`
			});

			return structuredClone(files);
		} catch (err: unknown) {
			if (err instanceof ClientResponseError) {
				throw error(err.status, err.message);
			}
			throw error(400, 'An error has occurred fetching uploaded files');
		}
	};

	return {
		files: getUserFiles(locals.user.id)
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData());
		try {
			if (!id) throw error(400, 'File Id is required');
			await locals.pb.collection('files').delete(id.toString());
		} catch (err: unknown) {
			if (err instanceof ClientResponseError) {
				throw error(err.status, err.message);
			}
			throw error(400, 'An error has occurred deleting project');
		}
	}
};
