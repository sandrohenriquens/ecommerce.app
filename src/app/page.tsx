import HeaderContainer from '@/src/components/header-container';
import FooterContainer from '@/src/components/footer-container';
import HomeContainer from '@/src/components/home-container';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeaderContainer />
      <main>
        <HomeContainer />
      </main>
      <FooterContainer />
    </div>
  );
}
