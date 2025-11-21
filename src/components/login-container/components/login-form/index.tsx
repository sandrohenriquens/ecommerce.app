export default function LoginForm() {
  return (
    <div data-component="login-form" className="flex-col-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Enter your email</label>
        <input type="text" className="common-input" />
      </div>
      <div className="flex-col-2">
        <label htmlFor="password">Enter your password</label>
        <input type="password" className="common-input" />
      </div>
    </div>
  );
}
