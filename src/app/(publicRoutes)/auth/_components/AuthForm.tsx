'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/lib/components/ui/form';
import { Card, CardContent } from '@/lib/components/ui/card';
import { Button } from '@/lib/components/ui/button';
import { Separator } from '@/lib/components/ui/separator';
import { Input } from '@/lib/components/ui/input';
import { toast } from 'sonner';

// Form validation schema
const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({ message: 'Invalid email address' }),
});

export function AuthForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [authMethod, setAuthMethod] = useState<'email' | 'google'>('email');
	const [emailSent, setEmailSent] = useState(false);

	// Initialize form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	// Handle magic link submission
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setIsLoading(true);
		try {
			// Here you would integrate with your auth provider
			console.log('Sending magic link to:', data.email);

			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1500));

      setEmailSent(true);
      
      toast(`We've sent a login link to ${data.email}`);

		} catch (error:any) {
        toast('Event has been created. error');

		} finally {
			setIsLoading(false);
		}
	};

	// Handle Google sign-in
	const handleGoogleSignIn = async () => {
		setIsLoading(true);
		try {
			// Here you would integrate with Google Auth
			console.log('Initiating Google sign-in');

			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1500));

			toast({
				title: 'Google authentication',
				description: 'Google authentication would happen here.',
			});
		} catch (error:any) {
			toast({
				title: 'Authentication failed',
				description: 'There was a problem signing in with Google',
				variant: 'destructive',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Card className='shadow-lg border-none'>
			<CardContent className='pt-6'>
				{emailSent ? (
					<div className='text-center space-y-4'>
						<Mail className='mx-auto h-12 w-12 text-primary' />
						<div className='space-y-2'>
							<h3 className='text-xl font-semibold'>Check your email</h3>
							<p className='text-sm text-muted-foreground'>
								We&apos;ve sent a magic link to your email address
							</p>
						</div>
						<Button
							variant='outline'
							className='mt-4 w-full'
							onClick={() => setEmailSent(false)}
						>
							Back to login
						</Button>
					</div>
				) : (
					<>
						<div className='space-y-4'>
							<Button
								type='button'
								variant='outline'
								className='w-full'
								disabled={isLoading}
								onClick={handleGoogleSignIn}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='mr-2 h-4 w-4'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path
										fill='#4285F4'
										d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
									/>
									<path
										fill='#34A853'
										d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
									/>
									<path
										fill='#FBBC05'
										d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
									/>
									<path
										fill='#EA4335'
										d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
									/>
								</svg>
								Continue with Google
							</Button>
						</div>

						<div className='relative my-6'>
							<div className='absolute inset-0 flex items-center'>
								<Separator />
							</div>
							<div className='relative flex justify-center'>
								<span className='bg-card px-2 text-sm text-muted-foreground'>
									Or continue with
								</span>
							</div>
						</div>

						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-4'
							>
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
					</>
				)}
			</CardContent>
		</Card>
	);
}
