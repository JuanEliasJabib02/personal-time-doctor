import { CalendarDays, Check, Clock } from "lucide-react";
import { MetricCard } from "./MetricCard";


export function TaskDashboard() {
  return (
		<div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
			<MetricCard
				title='Tareas Completadas'
				value={24}
				trend='+12% vs. semana anterior'
				icon={<Check />}
			/>
			<MetricCard
				title='Tiempo Hoy'
				value={`${Math.round(129 / 60)}h`}
				trend={'En progreso'}
				icon={<Clock />}
			/>
			<MetricCard
				title='Promedio Semanal'
				value={`${Math.round(120 / 60)}h/día`}
				trend='Constante'
				icon={<CalendarDays />}
			/>
		</div>
	);
}