import Link from 'next/link';
import { CiUser } from "react-icons/ci";

export default function HeaderLoginLink() {
  return (
    <header data-component="header-login-link">
      <Link href="/login">
        <CiUser size={24} />
      </Link>
    </header>
  );
}
