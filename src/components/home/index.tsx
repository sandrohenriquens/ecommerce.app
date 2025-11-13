import Link from "next/link";

export default function HomeContainer() {
  return (
    <div
      data-component="home-container"
      className="flex-col-4 h-screen"
    >
      <Link href="/">Home Page Container</Link>
    </div>
  );
}
