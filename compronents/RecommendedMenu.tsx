'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const menuItems = [
  { image: '/img/Sushi.png', title: 'Sushi Set' },
  { image: '/img/Ramen.png', title: 'Tonkotsu Ramen' },
  { image: '/img/tempura.png', title: 'Tempura' },
  { image: '/img/Donburi.png', title: 'Donburi' },
]

import { Sawarabi_Mincho } from 'next/font/google'
const sawarabi = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: '400',
})

export default function RecommendedMenu() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className={`${sawarabi.className} text-5xl mb-6 text-center`}>Recommended Menu</h2>
      <Swiper
        className="custom-swiper "
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-70 object-cover" />
              <div className="p-4 bg-[#5a3817]">
                <h3 className={`${sawarabi.className} text-xl font-semibold text-center`}>{item.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
