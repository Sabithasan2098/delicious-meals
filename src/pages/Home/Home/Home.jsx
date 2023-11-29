import SectionTitle from "../../../Components/SectionTitle";
import Announcement from "../Announcement";
import Category from "../Category";
import MemberShip from "../MemberShip";
import Banner from "../banner";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Delicious meals || home</title>
      </Helmet>
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
