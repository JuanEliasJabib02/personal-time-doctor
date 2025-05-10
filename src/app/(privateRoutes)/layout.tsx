import { Sidebar } from "@/lib/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen bg-blue-500'>
      <Sidebar />
      <div className='flex-1 p-8 bg-green-500'>
        {children}
      </div>
    </div>
  );
}
