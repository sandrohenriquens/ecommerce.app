import HeaderContainer from '@/src/components/header-container';
import FooterContainer from '@/src/components/footer-container';
import CartContainer from '@/src/components/cart-container';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeaderContainer />
      <main>
        <CartContainer />
      </main>
      <FooterContainer />
    </div>
  );
}
