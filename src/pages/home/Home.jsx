import Features from "../../components/Features/Features";
import Feedback from "../../components/FeedBack/Feedback";
import FindCommunity from "../../components/FindCommunity/FindCommunity";
import Footer from "../../components/Footer/Footer";
import JoinTeam from "../../components/JoinTeam/JoinTeam";
import OurComunity from "../../components/OurComunity/OurComunity";
import SupportSession from "../../components/SupportSession/SupportSession";
import Banner from "../../components/header/banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurComunity></OurComunity>
      <Features></Features>
      <FindCommunity></FindCommunity>
      <SupportSession></SupportSession>
      <Feedback></Feedback>
      <JoinTeam></JoinTeam>
      <Footer></Footer>
    </div>
  );
};

export default Home;
