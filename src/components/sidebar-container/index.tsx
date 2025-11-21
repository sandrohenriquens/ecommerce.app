'use client';

interface SideBarContainerProps {
  isSidebarOpen: boolean;
  onClose: () => void;
}

export default function SideBarContainer({
  isSidebarOpen,
  onClose,
}: SideBarContainerProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-50' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        data-component="sidebar-container"
        className={`fixed top-0 left-0 z-50 h-screen w-80 bg-gray-700 transition-transform duration-200 ease-in ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="no-scrollbar flex h-full flex-col gap-16 overflow-x-scroll p-4">
          <button onClick={onClose} className="mb-4 cursor-pointer text-xl">
            X
          </button>
          <div>Menu</div>
          <div>Categories Placheholder</div>
        </div>
      </div>
    </>
  );
}
