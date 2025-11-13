import Link from 'next/link';
import HeaderLoginLink from '@/src/components/header/header-login-link';
import HeaderSearch from '@/src/components/header/header-search';

export default function HeaderContainer() {
  return (
    <header
      data-component="header-container"
      className="bg-black flex h-16 items-center justify-around p-4 text-white"
    >
      <Link href="/">Home</Link>
      <HeaderSearch />
      <HeaderLoginLink />
    </header>
  );
}
