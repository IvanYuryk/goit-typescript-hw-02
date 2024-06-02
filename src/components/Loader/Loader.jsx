import { RotatingLines } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <RotatingLines
      visible={loading}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
