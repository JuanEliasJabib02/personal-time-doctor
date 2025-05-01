import { useState } from "react";
import { toast } from "sonner";

export function useGoogleLogin() {
	const [isLoading, setIsLoading] = useState(false);

	const handleGoogleLogin = async () => {
		setIsLoading(true);
		try {
			// Here we would implement the Convex auth logic for Google
			console.log('Initiating Google sign-in with Convex');

			// Implementation with Convex would go here
			// Example: await convex.auth.signInWithGoogle();

			// Simulate API call for now
			await new Promise(resolve => setTimeout(resolve, 1500));

			toast('Successfully authenticated with Google');
			return { success: true };
		} catch (error: any) {
			toast('Error with google auth');
			console.error('Google login error:', error);
			return { success: false, error };
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		handleGoogleLogin,
	};
}
