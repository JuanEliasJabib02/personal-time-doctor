export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className='w-full h-screen bg-blue-500'>{children}</section>;
}
