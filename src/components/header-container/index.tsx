import Link from 'next/link';
import { IoLogoOctocat } from 'react-icons/io';
import { IoCartOutline } from "react-icons/io5";
import HeaderSearch from '@/src/components/header-container/components/header-search';

export default function HeaderContainer() {
  return (
    <header
      data-component="header-container"
      className="flex h-16 items-center justify-around bg-black p-4 text-white"
    >
      <Link href="/">
        <IoLogoOctocat size={24} />
      </Link>

      <HeaderSearch />
      <Link href="/login">Login</Link>
      <Link href="/cart"> <IoCartOutline size={24} /></Link>
    </header>
  );
}
