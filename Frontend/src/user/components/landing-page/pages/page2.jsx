import Box from "../../utilities/Box";
import testImage from "/IMG-20230711-WA0078.jpg";

const Page2 = () => {
  return (
    <>
      <div className="landing1 bg-blue-50   w-full overflow-auto">
        <div className="title flex flex-col justify-center items-center">
          <div className="intro flex justify-center pt-3 text-4xl font-semibold">
            Our latest arrivals
          </div>
          <div className="sub-intro mt-3 items-center pt-3 pb-3 w-[60%]  rounded-md flex justify-center">
            Shop smarter and save with our unbeatable prices."
          </div>
        </div>
        <div className="p-5 grid grid-cols-2 sm:grid-cols-4  gap-3">
          <Box Image={testImage} />
          <Box Image={testImage} />
          <Box Image={testImage} />
          <Box Image={testImage} />
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
export default Page2;
