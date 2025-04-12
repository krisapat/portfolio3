import FadeUpWhenVisible from "@/compronents/FadeUpWhenVisible";
import FoodSection from '@/compronents/FoodSection';
import "../style/style.css"

import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Sawarabi_Mincho } from 'next/font/google'
import RecommendedMenu from "@/compronents/RecommendedMenu";

const sawarabi = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: '400',
})


export default function Home() {
  return (
    <main className="bg-[#844c22]">
      <section id="Home">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-50"
            style={{ backgroundImage: "url('/img/Japaneserestaurant.png')" }}
          />
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
          {/* Content Centered */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className={`${sawarabi.className} text-center text-white px-4 space-y-5`}>
              <FadeUpWhenVisible>
                <h1 className="text-6xl mb-4">Tokyo Table</h1>
              </FadeUpWhenVisible>
              <FadeUpWhenVisible>
                <p className="text-2xl">Japanese restaurant</p>
              </FadeUpWhenVisible>
              <div>
                <FadeUpWhenVisible>
                  <a
                    href="https://lineman.line.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-6 py-3 bg-white text-black rounded-xl text-lg transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105 mt-auto"
                  >
                    Order now!
                  </a>
                </FadeUpWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section id="About us">
        <div className="flex flex-col md:flex-row w-full min-h-screen relative">
          <div
            className="hidden md:block md:w-1/2 bg-[url('/img/inside.png')] bg-cover bg-center"
          />
          <div
            className={`
      relative w-full md:w-1/2 flex items-center justify-center p-8 min-h-screen
      bg-[url('/img/inside.png')] bg-cover bg-center md:bg-none
    `}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 md:hidden" />

            <div className="relative z-10 w-full">
              <FadeUpWhenVisible>
                <h1 className={`${sawarabi.className} text-4xl mb-4`}>
                  Japanese Restaurant
                </h1>
              </FadeUpWhenVisible>
              <FadeUpWhenVisible>
                <p className="text-lg">
                  Welcome to our authentic Japanese cuisine experience. Enjoy the finest sushi, ramen, and more in a cozy atmosphere.
                </p>
              </FadeUpWhenVisible>
            </div>
          </div>
        </div>
      </section>
      <section id="Menu">
        <FadeUpWhenVisible>
          <RecommendedMenu />
        </FadeUpWhenVisible>
        <FoodSection />
      </section>
      <section id="Location & Contact">
        <div className="flex flex-col md:flex-row w-full min-h-screen relative">
          <div
            className="hidden md:block md:w-1/2 bg-[url('/img/Location.png')] bg-cover bg-center"
          />
          <div className={`
      relative w-full md:w-1/2 flex items-center justify-center p-8 min-h-screen
      bg-[url('/img/Location.png')] bg-cover bg-center md:bg-none
    `}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 md:hidden" />

            <div className="relative z-10 w-full">
              <div className="mb-5 space-y-3">
                <FadeUpWhenVisible>
                  <h1 className={`${sawarabi.className} text-4xl`}>
                    Location
                  </h1>
                </FadeUpWhenVisible>
                <FadeUpWhenVisible>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799214652!2d100.524916!3d13.7563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e7ed1d08979%3A0x39db95759b6b651!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1649551417304!5m2!1sen!2sth"
                    className="w-full min-h-[300px] border-0 rounded-lg"
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </FadeUpWhenVisible>
                <FadeUpWhenVisible>
                  <p className="text-lg">
                    Bangkok, Thailand’s
                  </p>
                </FadeUpWhenVisible>
              </div>
              <div className="mb-5 space-y-3">
                <FadeUpWhenVisible>
                  <h1 className={`${sawarabi.className} text-4xl`}>
                    Contact
                  </h1>
                </FadeUpWhenVisible>
                <FadeUpWhenVisible >
                  <div className="flex space-x-1 items-center">
                    <p className="text-lg">
                      Social :
                    </p>
                    {/* Facebook */}
                    <div className="relative group">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/50 block text-white bg-black/50 p-2 rounded-full hover:bg-blue-600 transition"
                      >
                        <FaFacebookF />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        Facebook
                      </span>
                    </div>

                    {/* Instagram */}
                    <div className="relative group">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/50 block text-white bg-black/50 p-2 rounded-full hover:bg-pink-600 transition"
                      >
                        <FaInstagram />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        Instagram
                      </span>
                    </div>

                    {/* X / Twitter */}
                    <div className="relative group">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/50 block text-white bg-black/50 p-2 rounded-full hover:bg-sky-600 transition"
                      >
                        <FaXTwitter />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        X (Twitter)
                      </span>
                    </div>
                  </div>
                </FadeUpWhenVisible>
                <FadeUpWhenVisible>
                  <p className="text-lg">
                    Tel : 0xx-xxx-xxxx
                  </p>
                </FadeUpWhenVisible>
                <FadeUpWhenVisible>
                  <p className="text-lg">
                    Gmail : 123456@Portfolio.com
                  </p>
                </FadeUpWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
