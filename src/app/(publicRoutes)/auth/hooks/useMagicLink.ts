import { useState } from "react";
import { toast } from "sonner";

export function useMagicLink() {
	const [isLoading, setIsLoading] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	const handleMagicLink = async (email: string) => {
		setIsLoading(true);
		try {
			// Here we would implement the Convex auth logic for magic links
			console.log('Sending magic link to:', email);

			// Implementation with Convex would go here
			// Example: await convex.auth.sendMagicLink({ email });

			// Simulate API call for now
			await new Promise(resolve => setTimeout(resolve, 1500));

			setEmailSent(true);
			toast(`We've sent a login link to ${email}`);

			return { success: true };
		} catch (error: any) {
			toast('Failed to send magic link');
			console.error('Magic link error:', error);
			return { success: false, error };
		} finally {
			setIsLoading(false);
		}
	};

	const resetEmailSent = () => {
		setEmailSent(false);
	};

	return {
		isLoading,
		emailSent,
		handleMagicLink,
		resetEmailSent,
	};
}
