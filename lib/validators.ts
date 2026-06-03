import { z } from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must not exceed 50 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens')
    .regex(/^(?!-|_)/, 'Username cannot start with - or _')
    .regex(/(?<!-)(?<!_)$/, 'Username cannot end with - or _'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must not exceed 100 characters'),
});

export const registerSchema = z.object({
  userName: z
    .string()
    .trim()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must not exceed 50 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens')
    .regex(/^(?!-|_)/, 'Username cannot start with - or _')
    .regex(/(?<!-)(?<!_)$/, 'Username cannot end with - or _'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Please enter a valid email address')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must be in format: user@domain.com')
    .max(100, 'Email must not exceed 100 characters'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must not exceed 100 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  role: z.string().optional().default('USER'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

export async function validateInput<T>(schema: z.ZodSchema, data: unknown): Promise<{ valid: true; data: T } | { valid: false; error: string }> {
  try {
    const validatedData = schema.parse(data);
    return { valid: true, data: validatedData as T };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0];
      return { valid: false, error: firstError.message };
    }
    return { valid: false, error: 'Validation failed' };
  }
}

export function validateField(
  fieldName: string,
  value: unknown,
  schema: z.ZodSchema
): string | null {
  try {
    schema.parse(value);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues[0]?.message || null;
    }
    return null;
  }
}
