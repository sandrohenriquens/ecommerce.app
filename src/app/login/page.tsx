import HeaderContainer from '@/src/components/header';
import FooterContainer from '@/src/components/footer';
import LoginContainer from '@/src/components/login';

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
