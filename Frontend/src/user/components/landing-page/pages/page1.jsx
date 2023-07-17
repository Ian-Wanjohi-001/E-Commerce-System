import testImage from "/IMG-20230711-WA0083.jpg";
import Box from "../../utilities/Box";

const Page1 = () => {
  return (
    <>
      <div className="landing1 bg-blue-50   w-full overflow-auto">
        <div className="title flex flex-col justify-center items-center">
          <div className="intro flex justify-center pt-3 text-4xl font-semibold">
            Better clothing for the planet
          </div>
          <div className="sub-intro mt-3 items-center pt-3 pb-3 w-[60%]  rounded-md flex justify-center">
            Discover the latest trends in fashion, handpicked just for you.
          </div>
        </div>
        <div className="p-5 grid grid-cols-5 gap-4">
          <Box Image={testImage} />
          <Box Image={testImage} />
          <Box Image={testImage} />
          <Box Image={testImage} />
          <Box Image={testImage} />
        </div>
      </div>
    </>
  );
};
export default Page1;
