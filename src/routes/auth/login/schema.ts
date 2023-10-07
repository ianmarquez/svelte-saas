import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' }),
	password: z.string({ required_error: 'Password is required' })
});

export type LoginFormSchema = typeof loginFormSchema;
