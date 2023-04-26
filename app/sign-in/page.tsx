import { currentUser, auth } from '@clerk/nextjs/app-beta';
import { redirect } from 'next/navigation';
import SignInForm from './SignInForm';

export default async function SignIn() {

  const user = await currentUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <SignInForm />
  )
}
