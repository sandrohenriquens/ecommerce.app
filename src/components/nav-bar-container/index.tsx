import NavBarMenuLink from './components/navbar-sidebar-link';

export default function NavBarContainer() {
  return (
    <nav
      data-component="nav-bar-container"
      className="no-scrollbar bg-secondaryGray flex h-fit items-center gap-6 overflow-y-scroll p-2 text-sm"
    >
      <NavBarMenuLink />
      <div data-component="nav-bar-items" className="flex w-full gap-4">
        <div>Categories</div>
        <div>Recomendation</div>
        <div>Popular</div>
      </div>
    </nav>
  );
}
