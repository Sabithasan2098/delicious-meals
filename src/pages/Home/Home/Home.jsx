import SectionTitle from "../../../Components/SectionTitle";
import Announcement from "../Announcement";
import Category from "../Category";
import MemberShip from "../MemberShip";
import Banner from "../banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle
        heading={"order online anytime"}
        subHeading={"our most demandable foods only for you"}
      ></SectionTitle>
      <Category></Category>
      <Announcement></Announcement>
      <SectionTitle
        heading={"don't miss out"}
        subHeading={"Exclusive Membership Program "}
      ></SectionTitle>
      <MemberShip></MemberShip>
    </div>
  );
};

export default Home;
