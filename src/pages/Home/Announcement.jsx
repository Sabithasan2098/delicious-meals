import { GrAnnounce } from "react-icons/gr";

const Announcement = () => {
  return (
    <div className="bg-gradient-to-r from-[#001F3F] to-[#FFD700] p-4 rounded-lg mb-40 py-14 my-40  ">
      <div className="max-w-md mx-auto">
        <h1 className="flex gap-2  items-center text-7xl font-bold">
          <GrAnnounce className="text-blue-500"></GrAnnounce>
          <span className="text-yellow-300 text-5xl">10 years special</span>
        </h1>
      </div>
      <div className="text-center pt-6">
        <h2 className="text-[#FFD700] pb-5 text-5xl font-bold">
          A Decade of Excellence Celebration!
        </h2>
        <p className="text-white text-xl font-bold">
          Join us in commemorating 10 years of excellence with our exclusive
          special offer! As a heartfelt thank you for your unwavering support
          over the past decade, we are thrilled to present you with unparalleled
          deals and surprises. Dive into a celebration of a decades worth of
          milestones and memories with extraordinary discounts, exclusive perks,
          and limited-time offers. Heres to a decade of shared moments, and to
          many more to come. Cheers to you, our valued customers, for making the
          last 10 years truly special!
        </p>
      </div>
    </div>
  );
};

export default Announcement;
