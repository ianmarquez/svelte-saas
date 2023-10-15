import type { FilesResponse } from '$lib/types/pocketbase-types';
import { error, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	if (!params.fileId) {
		throw error(400, 'File Id is required');
	}
	if (locals.pb.authStore.isValid === false || !locals.user) {
		throw redirect(303, '/auth/login?redirect=/dashboard');
	}

	const getUserFile = async (fileId: string) => {
		try {
			const file = await locals.pb.collection('files').getOne<FilesResponse>(fileId);
			return structuredClone(file);
		} catch (err: unknown) {
			if (err instanceof ClientResponseError) {
				throw error(err.status, err.message);
			}
			throw error(400, 'An error has occurred fetching uploaded files');
		}
	};

	return {
		file: getUserFile(params.fileId)
	};
};
