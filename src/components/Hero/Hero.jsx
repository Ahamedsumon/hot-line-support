import heroImage from "../../assets/vector1.png";

const Hero = ({ addToTaskStatusTickets, resolvedCount }) => {
  return (
    <div className=" max-w-[95%] mx-auto my-15">
      <div className="flex flex-col md:flex-row  gap-4">
        <div className="flex justify-between basis-1/2 bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-lg relative">
          <img className="overflow-hidden" src={heroImage} alt="" />
          <img
            className="transform -scale-x-100  overflow-hidden"
            src={heroImage}
            alt=""
          />
          <div className="absolute top-2/5 left-2/5 text-center">
            <p className="text-white text-2xl font-bold">In Progress</p>
            <p className="text-white text-2xl font-bold pt-1">
              {addToTaskStatusTickets.length}
            </p>
          </div>
        </div>
        <div className="flex justify-between basis-1/2 bg-linear-to-br from-[#54CF68] to-[#00827A] rounded-lg relative">
          <img className="overflow-hidden" src={heroImage} alt="" />
          <img
            className="transform -scale-x-100  overflow-hidden"
            src={heroImage}
            alt=""
          />
          <div className="absolute top-2/5 left-2/5 text-center">
            <p className="text-white text-2xl font-bold">Resolved</p>
            <p className="text-white text-2xl font-bold pt-1">
              {resolvedCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
