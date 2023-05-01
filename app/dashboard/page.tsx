import { UserProfile, currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'HG - Dashboard',
  description: 'Horacio Gutierrez - Pagina de dashboard personal del programador fullstack Horacio Gutierrez',
}

export default async function DashboardPage() {

  const user = await currentUser();

  if(!user) {
    redirect('/sign-in');
  }

  return (
    <UserProfile />
  )
}