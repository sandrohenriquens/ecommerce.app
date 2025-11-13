import HeaderContainer from '@/src/components/header';
import FooterContainer from '@/src/components/footer';
import RegisterContainer from '@/src/components/register';

export default function RegisterPage() {
  return (
    <div className="flex flex-col">
      <HeaderContainer />
      <main>
        <RegisterContainer />
      </main>
      <FooterContainer />
    </div>
  );
}
