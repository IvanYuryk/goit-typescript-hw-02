import { RotatingLines } from "react-loader-spinner";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div>
      {loading && (
        <RotatingLines
          visible={true}
          strokeColor="green"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
        />
      )}
    </div>
  );
};

export default Loader;

