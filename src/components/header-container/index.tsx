import Link from 'next/link';
import HeaderSearch from '@/src/components/header-container/components/header-search';

export default function HeaderContainer() {
  return (
    <header data-component="header-container" className="bg-black text-white">
      <div className="mx-auto flex max-w-2xl items-center justify-evenly p-4">
        <div className="flex items-center gap-2">
          <Link href="/">Home
          </Link>
          <HeaderSearch />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login">Login</Link>
          <Link href="/cart">
            <IoCartOutline size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}
