import LoginForm from '@/src/components/login/login-form';

export default function LoginContainer() {
  return (
    <div
      data-component="login-container"
      className="flex h-screen items-center justify-around bg-white p-4 text-black"
    >
      <LoginForm />
    </div>
  );
}
