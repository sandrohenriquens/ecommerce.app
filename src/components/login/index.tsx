import LoginForm from '@/src/components/login/login-form';
import Link from 'next/link';

export default function LoginContainer() {
  return (
    <div
      data-component="login-container"
      className="mxy-0 mx-auto flex h-screen max-w-96 flex-col items-center"
    >
      <h1 className="mt-12 mb-6 text-2xl font-bold">
        Login in to your account
      </h1>
      <div className="m-4 w-full rounded-lg bg-gray-800 p-8">
        <div className="mb-6">
          <LoginForm />
        </div>
        <div className="flex gap-1">
          Dont have an account?
          <Link href="/register">
            <div className="text-blue-400 underline underline-offset-4">
              Sign up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
