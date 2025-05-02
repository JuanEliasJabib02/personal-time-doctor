'use client';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithAuth } from '@convex-dev/auth/react';
import { ConvexProvider } from 'convex/react'; // Fallback if not using auth features everywhere

// You might need to adjust the URL based on your Convex deployment
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexProviderWithAuth({
	children,
}: {
	children: React.ReactNode;
}) {
	// Option 1: Using the integrated provider from @convex-dev/auth
	// This is generally preferred if you use auth features widely
	return (
		<ConvexProviderWithAuth client={convex}>{children}</ConvexProviderWithAuth>
	);

	// Option 2: Basic Convex Provider (if auth isn't needed everywhere or handled differently)
	// return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}

// If you prefer to keep the original name from Step 22,
// you would rename this file to ConvexAuthProvider.tsx
// and update the import in src/app/layout.tsx accordingly.
