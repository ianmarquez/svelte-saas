import { z } from 'zod';

export const resetPasswordSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' })
});

export type ResetPasswordSchema = typeof resetPasswordSchema;
