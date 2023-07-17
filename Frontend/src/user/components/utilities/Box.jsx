const Box = ({ Image }) => {
  console.log(Image);
  return (
    <>
      <div className="image-section rounded-[5px]">
        <img
          src={Image}
          className="w-full h-[250px] object-contain rounded-[5px]"
          alt="image1"
        />
      </div>
    </>
  );
};

export default Box;
