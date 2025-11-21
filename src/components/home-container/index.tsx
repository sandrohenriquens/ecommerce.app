import CategoryCarousel from '@/src/components/common/category-carousel';

export default function HomeContainer() {
  return (
    <div data-component="home-container" className="pages-container">
      <p>Home Page Container</p>
      <CategoryCarousel />
    </div>
  );
}
