import { Hourglass, Timer } from "lucide-react";
import { AuthForm } from "./_components/AuthForm";

export default function AuthPage() {
    return (
			<div className='min-h-screen bg-background flex items-center justify-center'>
				<div className='flex flex-col max-w-lg w-full '>
					<div className='flex items-center justify-center mb-6'>
						<div className='p-4 bg-black rounded-full flex justify-center items-center'>
							<Timer size={36} color='white' />
						</div>
					</div>
					<h1 className='text-3xl font-bold text-center mb-2'>Welcome back</h1>
					<p className='text-center text-muted-foreground mb-6'>
						Sign in to your account to continue
					</p>
					<AuthForm />
				</div>
			</div>
		);
  }
  