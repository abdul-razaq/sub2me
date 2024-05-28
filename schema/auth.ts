import { z, ZodType } from 'zod';

export interface CreateAccountFormData {
  fullname: string;
  phoneNumber: string;
  email: string;
  referralCode?: string;
}

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export interface CreatePasswordFormData {
  password: string;
  confirmPassword: string;
}

export const CreatePasswordSchema: ZodType<CreatePasswordFormData> = z
  .object({
    password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
    confirmPassword: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });

export const CreateAccountSchema: ZodType<CreateAccountFormData> = z
  .object({
    fullname: z.string().min(5, { message: 'Fullname must be at least 3 characters long.' }),
    phoneNumber: z.string().regex(phoneRegex, 'Enter a valid phone number'),
    referralCode: z.string().optional(),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
  })
  .required({ fullname: true, phoneNumber: true, email: true });

export interface LoginFormData {
  email: string;
  password: string;
}
