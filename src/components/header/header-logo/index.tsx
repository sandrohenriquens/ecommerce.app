import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <header data-component="header" className="bg-primary text-black">
      <Link href="/">Home</Link>
      <Link href="/login">aaaaLogin</Link>
    </header>
  );
}
