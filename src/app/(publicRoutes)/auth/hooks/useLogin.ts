import { useState } from 'react';
import { useMagicLink } from './useMagicLink';

export function useLogin() {
	const [authMethod, setAuthMethod] = useState<'email' | 'google'>('email');

	const {
		isLoading: isMagicLinkLoading,
		emailSent,
		handleMagicLink,
		resetEmailSent,
	} = useMagicLink();


	const isLoading = isMagicLinkLoading

	return {
		authMethod,
		setAuthMethod,
		isLoading,
		emailSent,
		resetEmailSent,
		handleMagicLink,
	};
}
