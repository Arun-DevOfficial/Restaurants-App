import DotLoader from "react-spinners/DotLoader";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-screen absolute top-[5%] left-[35%]">
      <DotLoader color="#FF9A00" size={60} />
    </div>
  );
};

export default LoadingScreen;
