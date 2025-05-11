import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/lib/components/ui/tabs';
import { TaskDashboard } from './_components/TaskDashboard';

export default function DashboardPage() {
	return (
		<div className='bg-background h-full w-full'>
			<h2 className='text-2xl font-semibold mb-6'>Productivity Dashboard</h2>
			<Tabs defaultValue='dashboard' className='w-full'>
				<TabsList className='mb-6 bg-card/80 backdrop-blur-lg border border-border/50 p-1 rounded-lg'>
					<TabsTrigger
						value='dashboard'
						className='rounded-md data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground'
					>
						Dashboard
					</TabsTrigger>
					<TabsTrigger
						value='list'
						className='rounded-md data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground'
					>
						Lista de Tareas
					</TabsTrigger>
				</TabsList>
				<TabsContent value='dashboard'>
					<TaskDashboard />
				</TabsContent>
				<TabsContent
					value='list'
					className='p-6 rounded-lg bg-card/80 backdrop-blur-lg shadow-lg border border-border/50'
				>
					<div className='text-center py-10'>
						<h3 className='text-xl font-medium text-foreground'>
							Lista de Tareas
						</h3>
						<p className='mt-2 text-sm text-muted-foreground'>
							El diseño de la lista de tareas se implementará próximamente.
						</p>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
