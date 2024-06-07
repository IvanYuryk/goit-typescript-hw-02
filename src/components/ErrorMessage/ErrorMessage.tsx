import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.error}>
      Failed to fetch images... Try reloading the page
    </p>
  );
};

export default ErrorMessage;
