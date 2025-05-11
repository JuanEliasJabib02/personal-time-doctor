import { Sidebar } from "@/lib/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen '>
      <Sidebar />
      <div className='flex-1 p-12 '>
        {children}
      </div>
    </div>
  );
}
