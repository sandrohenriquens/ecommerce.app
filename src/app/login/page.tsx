import HeaderContainer from '@/src/components/header-container';
import FooterContainer from '@/src/components/footer-container';
import LoginContainer from '@/src/components/login-container';

export default function LoginPage() {
  return (
    <div className="flex flex-col">
      <HeaderContainer />
      <main>
        <LoginContainer />
      </main>
      <FooterContainer />
    </div>
  );
}
