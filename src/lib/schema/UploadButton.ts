import { z } from 'zod';

export const uploadButtonFormSchema = z.object({
	file: z
		.instanceof(FileList)
		.refine((files) => files?.length > 0, 'PDF File is required.')
		.refine((files) => files[0].type === 'application/pdf', 'File must be a PDF.')
});

export type UploadButtonFormSchema = typeof uploadButtonFormSchema;
