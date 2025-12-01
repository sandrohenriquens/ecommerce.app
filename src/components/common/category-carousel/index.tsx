'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { CategoriesMocked as items } from '@/src/utils/mocks/carousel-mock';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CategoryCarousel() {
  return (
    <div
      data-component="category-carousel"
      className="rounded-md bg-primaryGray p-4"
    >
      <div className="mb-4 text-2xl font-semibold">Categories</div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.5}
        slidesPerGroup={1}
        breakpoints={{
          640: { slidesPerView: 2.5, slidesPerGroup: 2 },
          768: { slidesPerView: 3, slidesPerGroup: 3 },
          1024: { slidesPerView: 5, slidesPerGroup: 5 },
        }}
        navigation
        style={
          {
            '--swiper-navigation-color': 'black',
            '--swiper-navigation-size': '40px',
          } as React.CSSProperties
        }
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="w-full rounded-md object-cover"
              />
              <p className="mt-2 text-center text-sm">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
