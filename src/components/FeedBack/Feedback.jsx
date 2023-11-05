import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
const Feedback = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="max-w-screen-xl mx-auto">
      <div className="w-3/4 text-center mx-auto">
        <h1 className="text-4xl font-extrabold">
          Don’t just take our word for it
        </h1>
        <p className="my-4 text-lg">
          Studying online in a focus room with friends and strangers is a
          game-changer for millions of students all the world. <br /> … and
          the crowd goes wild:
        </p>
      </div>
      <div className="mt-20">
        <Swiper
          slidesPerView={"auto"}
          /* autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} */
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border p-5 mb-10 bg-[#F4EEF5]">
              <i className="fa-solid fa-quote-left text-[#FF6F61] text-2xl"></i>
              <h1 className="text-xl font-extrabold my-2">Awesome Community</h1>
              <p>
                As a chronic procrastinator, this community really helps me
                motivate myself to get my homework done. Has cool leaderboards,
                timers, and study tips. It’s a really large community so it’s
                pretty easy to meet people, too.
              </p>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://i.ibb.co/s5MFD5c/client-love1.webp"
                  alt=""
                  className="w-12"
                />
                <p>
                  Jaxcon <br /> <p>CSE </p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border p-5 mb-10 bg-[#F4EEF5]">
              <i className="fa-solid fa-quote-left text-[#FF6F61] text-2xl"></i>
              <h1 className="text-xl font-extrabold my-2">
                Productivity Booster
              </h1>
              <p>
                I have never been so focused and productive when studying by
                myself before. I can study with someone basically 24/7 if I
                really wanted too. It has been an amazing help! 💜 Thanks Study
                Together!
              </p>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://i.ibb.co/tb5zm44/client-love2.jpg"
                  alt=""
                  className="w-12"
                />
                <p>
                  Pitar <br /> <p>EEE</p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border p-5 mb-10 bg-[#F4EEF5]">
              <i className="fa-solid fa-quote-left text-[#FF6F61] text-2xl"></i>
              <h1 className="text-xl font-extrabold my-2">Goals</h1>
              <p>
                I’ve been a part of it for probably a little over a month and
                I’ve noticed how it’s improved my ability to stay focused. Since
                everyone is also studying in the call and working hard, I feel
                obliged to stay on task as well.
              </p>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://i.ibb.co/yYw6LxH/client-love3.webp"
                  alt=""
                  className="w-12"
                />
                <p>
                  Akbor
                  <br /> <p>Social Science</p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border p-5 mb-10 bg-[#F4EEF5]">
              <i className="fa-solid fa-quote-left text-[#FF6F61] text-2xl"></i>
              <h1 className="font-extrabold text-xl my-2">
                Study Together is great
              </h1>
              <p>
                Study Together is perfect no flaws no nothing. It gives me a
                purpose and before this I did not study a lot now I do. Thanks
                Study Together.
              </p>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://i.ibb.co/RQ74Fm7/client-love5.jpg"
                  alt=""
                  className="w-12"
                />
                <p>
                  Piolo
                  <br /> <p>physics</p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border p-5 mb-10 bg-[#F4EEF5]">
              <i className="fa-solid fa-quote-left text-[#FF6F61] text-2xl"></i>
              <h1 className="text-xl font-extrabold my-2">Thank You!</h1>
              <p>
              Yesterday I completed my one year in this community. I feel so amazed that I have so many study hours without even noticing them, just cuz I was so focused with my study pals to achieve what I wanted to!!
              </p>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://i.ibb.co/s5MFD5c/client-love1.webp"
                  alt=""
                  className="w-12"
                />
                <p>
                  KAWSAR <br /> <p>CSE</p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border p-5 mb-10 bg-[#F4EEF5]">
              <i className="fa-solid fa-quote-left text-[#FF6F61] text-2xl"></i>
              <h1 className="text-xl font-extrabold my-2">The Level System is pog</h1>
              <p>
                The VC level system keeps me motivated — the more time spent studying, the more levels you gain and the fancier your role becomes. There’s even silent study calls with lofi music, silence, nature sounds and other types of ambience. 10/10 would recommend it to a friend.
              </p>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://i.ibb.co/tb5zm44/client-love2.jpg"
                  alt=""
                  className="w-12"
                />
                <p>
                  KABIR <br /> <p>Computer Science</p>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
