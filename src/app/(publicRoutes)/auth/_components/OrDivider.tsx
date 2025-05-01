'use client';
import { Separator } from '@/lib/components/ui/separator';

export function OrDivider() {
	return (
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
	);
}
