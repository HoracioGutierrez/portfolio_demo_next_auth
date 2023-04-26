import { UserProfile, currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  const user = await currentUser();

  if(!user) {
    redirect('/sign-in');
  }

  return (
    <UserProfile />
  )
}