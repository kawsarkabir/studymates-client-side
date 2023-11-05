import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
const Faq = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-left" className="max-w-screen-xl mx-auto p-5 mt-10">
      <h1 className=" font-extrabold text-4xl my-3 text-center">FAQ</h1>
      <p className="mt-5 text-center">
        Check out the most frequently asked questions, we are here for you
      </p>

      <div className="mt-14 w-2/3 mx-auto">
        <div className="collapse collapse-plus border-b rounded-none my-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            <h1>Why do people use StudyMates?</h1>
          </div>
          <div className="collapse-content leading-7">
            <p>
              People around the world (from 190+ countries) use StudyMates to be
              productive, stay motivated, and join a community of like-minded
              students and professionals. A lot of our users also like the
              platform because they never have to feel alone while studying or
              working.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b rounded-none my-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            <h1>Do I have to pay?</h1>
          </div>
          <div className="collapse-content leading-7">
            <p>StudyStream is completely free to use!</p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b rounded-none my-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            <h1>Why is there no audio or chat in some of the focus rooms?</h1>
          </div>
          <div className="collapse-content leading-7">
            <p>
              We disable audio and private messaging in our public rooms to
              eliminate distractions for those who are hard at work. This is
              also for the protection of our users, as occasionally there may be
              spammers who try to abuse the chat. There are plenty of
              opportunities to socialise in our web app, as well as in our
              community events, socials, and mindfulness sessions.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b rounded-none my-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            <h1>
              What are mindfulness sessions? What other events do you run?
            </h1>
          </div>
          <div className="collapse-content leading-7">
            <p>
              Our mindfulness sessions are designed to give you the study break
              you need, while also taking care of your mental wellbeing and
              productivity needs. For a schedule of all our sessions, please
              visit the Events page of our website.
            </p>
          </div>
        </div>
        <div className="text-center my-10">
          <button className="text-red-600 font-bold">
            See all our FAQs
            <img
              className="inline ml-2"
              src="https://i.ibb.co/RjNwctc/aro-icon.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
