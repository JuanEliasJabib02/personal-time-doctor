'use client';
import { Card, CardContent } from '@/lib/components/ui/card';
import { useLogin } from '../hooks/useLogin';
import { EmailSentView } from './EmailSentView';
import { GoogleLoginButton } from './GoogleLoginButton';
import { MagicLinkForm } from './MagicLinkForm';
import { OrDivider } from './OrDivider';

export function AuthForm() {
	const {
		isLoading,
		emailSent,
		resetEmailSent,
		handleMagicLink,
		handleGoogleLogin,
	} = useLogin();

	return (
		<Card className='shadow-lg border-none'>
			<CardContent className='pt-6'>
				{emailSent ? (
					<EmailSentView onBackToLogin={resetEmailSent} />
				) : (
					<>
						<GoogleLoginButton
							onLogin={handleGoogleLogin}
							isLoading={isLoading}
						/>

						<OrDivider />

						<MagicLinkForm onSubmit={handleMagicLink} isLoading={isLoading} />
					</>
				)}
			</CardContent>
		</Card>
	);
}
