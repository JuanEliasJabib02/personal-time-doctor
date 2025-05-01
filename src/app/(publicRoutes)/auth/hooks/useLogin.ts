import { useState } from 'react';
import { useGoogleLogin } from './useGoogleLogin';
import { useMagicLink } from './useMagicLink';

export function useLogin() {
	const [authMethod, setAuthMethod] = useState<'email' | 'google'>('email');

	const {
		isLoading: isMagicLinkLoading,
		emailSent,
		handleMagicLink,
		resetEmailSent,
	} = useMagicLink();

	const { isLoading: isGoogleLoading, handleGoogleLogin } = useGoogleLogin();

	const isLoading = isMagicLinkLoading || isGoogleLoading;

	return {
		authMethod,
		setAuthMethod,
		isLoading,
		emailSent,
		resetEmailSent,
		handleMagicLink,
		handleGoogleLogin,
	};
}
