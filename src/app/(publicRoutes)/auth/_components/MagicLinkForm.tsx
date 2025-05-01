'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/lib/components/ui/form';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { authFormSchema } from '../schemas/authFormSchema';

interface MagicLinkFormProps {
	onSubmit: (email: string) => Promise<any>;
	isLoading: boolean;
}

export function MagicLinkForm({ onSubmit, isLoading }: MagicLinkFormProps) {
	// Initialize form
	const form = useForm<z.infer<typeof authFormSchema>>({
		resolver: zodResolver(authFormSchema),
		defaultValues: {
			email: '',
		},
	});

	// Handle magic link submission
	const handleSubmit = async (data: z.infer<typeof authFormSchema>) => {
		await onSubmit(data.email);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<div className='relative'>
									<Mail className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
									<Input
										placeholder='name@example.com'
										className='pl-10'
										disabled={isLoading}
										{...field}
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full' disabled={isLoading}>
					{isLoading ? 'Sending...' : 'Send Magic Link'}
				</Button>
			</form>
		</Form>
	);
}
