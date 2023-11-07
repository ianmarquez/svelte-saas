import type { FilesResponse } from '$lib/types/pocketbase-types';
import { error, redirect, type RequestHandler } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const DELETE: RequestHandler = async ({ params, locals }) => {
	if (locals.pb.authStore.isValid === false || !locals.user) {
		throw redirect(303, '/auth/login');
	}

	const { fileId } = params;
	try {
		if (!fileId) {
			throw error(400, 'File Id is required');
		}
		await locals.pb.collection('files').delete(fileId);
		return new Response(JSON.stringify({ message: 'File with id ' + fileId + ' deleted' }), {
			status: 200
		});
	} catch (err: unknown) {
		if (err instanceof ClientResponseError) {
			return new Response(JSON.stringify({ message: err.message }), {
				status: err.status
			});
		}
		return new Response(JSON.stringify({ message: 'An error has occurred deleting project' }), {
			status: 400
		});
	}
};

export const GET: RequestHandler = async ({ params, locals }) => {
	const { fileId } = params;
	try {
		if (!fileId) {
			throw error(400, 'File Id is required');
		}
		const file = await locals.pb.collection('files').getOne<FilesResponse>(fileId);
		return new Response(JSON.stringify(structuredClone(file)), {
			status: 200
		});
	} catch (err: unknown) {
		if (err instanceof ClientResponseError) {
			return new Response(JSON.stringify({ message: err.message }), {
				status: err.status
			});
		}
		return new Response(JSON.stringify({ message: 'An error has occurred fetching project' }), {
			status: 400
		});
	}
};
