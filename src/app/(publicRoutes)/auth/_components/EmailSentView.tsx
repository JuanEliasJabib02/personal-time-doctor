'use client';
import { Mail } from 'lucide-react';
import { Button } from '@/lib/components/ui/button';

interface EmailSentViewProps {
	onBackToLogin: () => void;
}

export function EmailSentView({ onBackToLogin }: EmailSentViewProps) {
	return (
		<div className='text-center space-y-4'>
			<Mail className='mx-auto h-12 w-12 text-primary' />
			<div className='space-y-2'>
				<h3 className='text-xl font-semibold'>Check your email</h3>
				<p className='text-sm text-muted-foreground'>
					We&apos;ve sent a magic link to your email address
				</p>
			</div>
			<Button variant='outline' className='mt-4 w-full' onClick={onBackToLogin}>
				Back to login
			</Button>
		</div>
	);
}
