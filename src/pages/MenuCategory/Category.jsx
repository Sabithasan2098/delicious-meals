import allfood from "../../../public/all.avif";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Components/Hooks/useMenu";
import FoodCart from "./FoodCart";

const Category = () => {
  const [menu] = useMenu();
  const breakFast = menu.filter((item) => item.meal === "breakfast");
  const lunch = menu.filter((item) => item.meal === "lunch");
  const dinner = menu.filter((item) => item.meal === "dinner");

  return (
    <div>
      <img className="mb-20" src={allfood} alt="" />
      <SectionTitle
        heading={"have wonderful food"}
        subHeading={"we serve delicious foods for you"}
      ></SectionTitle>
      <div className="my-20">
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Breakfast</Tab>
            <Tab>Lunch</Tab>
            <Tab>Dinner</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3">
              {menu.map((item) => (
                <FoodCart key={item._id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Breakfast type food</h2>
          </TabPanel>
          <TabPanel>
            <h2>Lunch type food</h2>
          </TabPanel>
          <TabPanel>
            <h2>Dinner type food</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
