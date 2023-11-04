import { Link } from "react-router-dom";

const SupportSession = () => {
  return (
    <div className="my-20 max-w-screen-xl mx-auto p-4">
      <div className="text-center">
        <p className="font-extrabold text-[#FF6F61]">
          The benefits of studying online in one of our study groups
        </p>
        <h1 className="font-extrabold text-2xl lg:text-4xl md:text-3xl">
          “Just” a study room? Think again!
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center mt-20">
        <div className="text-center">
          <div>
            <img
              src="https://i.ibb.co/YLpfcqw/61a7f1ea3242ca4e62169754-6188e229b9d0ec413fc03da2-Group-97-min.png"
              alt=""
              className="max-w-full mx-auto mb-4"
            />
            <div className="bg-white rounded-full w-24 shadow-xl  h-24 flex justify-center items-center relative bottom-56 left-14">
              <img
                src="https://i.ibb.co/R9fPr7r/61238019ad4d0f1eb18af3e3-study-time-duo.png"
                alt=""
              />
            </div>
          </div>
          <div className="-mt-10">
            <h1 className="font-extrabold text-2xl">
              The good kind of <br /> peer pressure
            </h1>
            <p className="my-4">
              You know how your parents always say peer pressure is bad? Well…
              when it comes to studying, they’re wrong. Studying with peers
              helps you get better grades - and that’s scientifically proven.
            </p>
            <Link className="text-[#FF6F61] font-bold text-lg">Read More</Link>
          </div>
        </div>
        <div className="text-center">
          <div>
            <div>
              <img
                src="https://i.ibb.co/L6XRtt5/61a7f1ea7cb8166ce8b029de-61895872dd6b3875c19b7a12-Group-99-min.png"
                alt=""
                className="max-w-full mx-auto mb-4"
              />
            </div>
            <div className="bg-white rounded-full w-24 shadow-xl  h-24 flex justify-center items-center relative bottom-28 left-14">
              <img
                src="https://i.ibb.co/5c5MbCw/612e2540abd9b3fbe44ee74e-save-heart-duo.png"
                alt=""
              />
            </div>
          </div>
          <div className="-mt-10">
            <h1 className="font-extrabold text-2xl">
              24/7 support, <br /> all year round
            </h1>
            <p className="my-4">
              Find a study buddy (or a procrastinate-mate), access exclusive
              boot camps, chat with tutors, or ask for community help. When you
              need a break, take a 5 min guided mindfulness session.
            </p>
            <Link className="text-[#FF6F61] font-bold text-lg">Read More</Link>
          </div>
        </div>
        <div className="text-center">
          <div>
            <img
              src="https://i.ibb.co/1Zmn6DT/61a7f1eacf1ab8ca3819eab9-61895898b53f191cf9513f14-Group-98-min.png"
              alt=""
              className="max-w-full mx-auto mb-4"
            />
            <div className="bg-white rounded-3xl shadow-xl w-28 flex justify-center items-center relative bottom-48 left-1">
              <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
                className="w-6"
              />
              <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
                className="w-6"
              />
              <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
                className="w-6"
              />
            
            </div>
            <div className="bg-white rounded-3xl shadow-xl w-32 flex justify-center items-center relative bottom-44 left-2">
              <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
                className="w-6"
              />
              <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
                className="w-6"
              />
              <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
                className="w-6"
              />
                <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
                className="w-6"
              />
            </div>
            <div className="bg-white rounded-full w-24 shadow-xl  h-24 flex justify-center items-center relative bottom-32 left-64">
              <img
                src="https://i.ibb.co/km7b7Yb/612e2560f336d56aaccf9f98-trophy-2-duo.png"
                alt=""
              />
            </div>
          </div>
          <div className="-mt-24">
            <h1 className="font-extrabold text-2xl">
              Studying, <br /> reloaded
            </h1>
            <p className="my-4">
              Let’s be honest, any task is more fun when you know there’s a
              reward at the end of it. We’ll track your progress and gamify your
              study sessions – all you have to do is set session goals.
            </p>
            <Link className="text-[#FF6F61] font-bold text-lg">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSession;
