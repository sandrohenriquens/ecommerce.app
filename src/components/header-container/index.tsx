import Link from 'next/link';
import HeaderSearch from '@/src/components/header-container/components/header-search';

export default function HeaderContainer() {
  return (
    <header data-component="header-container">
      <div className="bg-primaryGray flex items-center justify-evenly p-4">
        <div className="flex items-center gap-2">
          <Link href="/">Home</Link>
          <HeaderSearch />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login">Login</Link>
          <Link href="/cart"></Link>
        </div>
      </div>
    </header>
  );
}
