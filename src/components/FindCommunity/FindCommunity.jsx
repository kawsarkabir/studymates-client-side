const FindCommunity = () => {
  return (
    <div className="bg-[#F5F0F6] p-20 my-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <p className="font-extrabold text-[#FF6F61]">
            Not just a study stream room
          </p>
          <h1 className="font-extrabold text-2xl lg:text-4xl md:text-3xl">
            Find your community. Set Goals. <br />
            Achieve Them. Get rewarded.
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center mt-20">
          <div>
            <img
              src="https://i.ibb.co/K63BWv4/61a7ec9cdc0efa85574c8dde-618938b8d3815dbd8796c6ae-st-tool-1-min.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-extrabold text-2xl">Stronger together 💪</h1>
            <p className="my-4">
              Imagine a world in which studying is actually enjoyable. A world
              where you set goals and actually accomplish them. Where you find
              guidance where you need it, and you feel supported. Where you see
              progress and can celebrate your achievements alongside thousands
              of peers - where someone is always there for you! OK - enough
              imagining - welcome to StudyTogether.
            </p>
            <button className="btn btn-outline rounded-3xl border-[#FF6F61] text-[#FF6F61]">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCommunity;
