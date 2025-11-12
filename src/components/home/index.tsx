import Link from "next/link";

export default function HomeContainer() {
  return (
    <div
      data-component="home-container"
      className="display-column-4 h-screen bg-white text-red"
    >
      <Link href="/">Home Page Container</Link>
    </div>
  );
}
