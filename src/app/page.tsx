import HeaderContainer from "@/src/components/header";
import FooterContainer from "@/src/components/footer";
import HomeContainer from "@/src/components/home";

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
