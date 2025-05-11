import { Card, CardContent } from '@/lib/components/ui/card';

export function MetricCard({
	title,
	value,
	trend,
	icon,
}: {
	title: string;
	value: number | string;
	trend: string;
	icon: React.ReactNode;
}) {
	// En escala de grises, todos los colores se mapean al mismo estilo
	const colorStyles = 'from-gray-700 to-gray-500 shadow-card/20';
	const bgColors =
		'bg-gray-100 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300';

	return (
		<Card className='overflow-hidden border-0 shadow-lg'>
			<div className={`h-2 w-full bg-gradient-to-r ${colorStyles}`} />
			<CardContent className='p-6'>
				<div className='flex justify-between'>
					<div>
						<p className='text-sm font-medium text-muted-foreground'>{title}</p>
						<div className='mt-1'>
							<h3 className='text-2xl font-bold text-foreground'>{value}</h3>
							<p className='text-xs text-muted-foreground mt-1'>{trend}</p>
						</div>
					</div>
					<div
						className={`h-12 w-12 rounded-full flex items-center justify-center ${bgColors}`}
					>
						{icon}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
