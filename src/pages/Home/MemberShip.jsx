import { FaLock } from "react-icons/fa";

const MemberShip = () => {
  return (
    <div className="mb-40">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-[#FFD700]">
          Exclusive Membership Program
        </h1>
        <p className="text-xl font-bold text-[ #001F3F] pt-5">
          Embark on a journey of unparalleled privileges with our Exclusive
          Membership Program. Choose your tier and unlock a world of benefits
          tailored to enhance your experience. From special discounts to VIP
          treatment, our membership program is designed to reward and elevate
          your connection with us. Join today and discover a realm of exclusive
          offers crafted just for you
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 ">
        <div className="px-5 py-14 rounded-md shadow-xl  bg-[#CD7F32]">
          <h1 className="flex items-center gap-2">
            {" "}
            <FaLock className="text-[#5E3C27] text-3xl"></FaLock>{" "}
            <span className="text-white font-bold">Unlock it for only $70</span>
          </h1>

          <h1 className="py-5 text-2xl font-bold text-white">
            Bronze Tier Delights
          </h1>
          <p className=" font-bold text-white">
            Unlock the door to exclusive perks with our Bronze Membership. Dive
            into a world of special discounts, early access to promotions, and
            personalized offers tailored just for you. Embrace the beginning of
            a rewarding journey.
          </p>
        </div>
        <div className="px-5 py-14 rounded-md shadow-xl  bg-[#FFD700]">
          <h1 className="flex items-center gap-2">
            {" "}
            <FaLock className="text-[#654321] text-3xl"></FaLock>{" "}
            <span className="text-[#001F3F] font-bold">
              Unlock it for only $120
            </span>
          </h1>
          <h1 className=" py-5 text-2xl font-bold text-[#001F3F]">
            Golden Membership Experience
          </h1>
          <p className="font-bold text-[#001F3F]">
            Elevate your status with our prestigious Gold Membership. Immerse
            yourself in VIP treatment, indulge in premium rewards, and enjoy
            unparalleled access to member-only events. A golden opportunity for
            an extraordinary lifestyle.
          </p>
        </div>
        <div className="px-5 py-14 rounded-md shadow-xl  bg-[#B9F2FF]">
          <h1 className="flex items-center gap-2">
            {" "}
            <FaLock className="text-[ #007EA7] text-3xl"></FaLock>{" "}
            <span className="text-purple-400 font-bold">
              Unlock it for only $200
            </span>
          </h1>
          <h1 className=" py-5 text-2xl font-bold text-purple-600">
            Diamond Class Excellence
          </h1>
          <p className="font-bold text-purple-600">
            Experience the epitome of luxury with our Diamond Membership.
            Indulge in top-tier privileges, enjoy concierge services, and
            explore a world of exclusive perks reserved just for our esteemed
            Diamond members. Your ticket to unparalleled excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
