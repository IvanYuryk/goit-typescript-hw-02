// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import css from "./SearchBar.module.css";
// import toast, { Toaster } from "react-hot-toast";

// const notify = () =>
//   toast("Text must be entered to search for images.", {
//     duration: 4000,
//     position: "top-right",
//     style: {
//       backgroundColor: "orange",
//       color: "white",
//     },
//   });

// const SearchBar = ({ handleSubmit }) => {
//   const validationSchema = Yup.object().shape({
//     query: Yup.string().trim().required(notify),
//   });

//   return (
//     <header className={css.header}>
//       <Formik
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//         initialValues={{ query: "" }}
//       >
//         <Form className={css.form}>
//           <Field
//             className={css.inputSearch}
//             type="text"
//             name="query"
//             autoComplete="on"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//           <button type="submit">Search</button>
//         </Form>
//       </Formik>
//       <Toaster />
//     </header>
//   );
// };

// export default SearchBar;
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

import css from "./SearchBar.module.css";

const SearchBar = ({ handleSubmit }) => {
  const { register, handleSubmit: onSubmit } = useForm();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = () => {
    if (!query) {
      toast.error("Please enter a search query");
      return;
    }
    handleSubmit({ query });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <header id="header">
      <form onSubmit={onSubmit(submitHandler)}>
        <input
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          {...register("query")}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={query}
        />
        <button className={css.searchBtn} type="submit">
          <FiSearch size="16px" />
        </button>
        <Toaster position="top-left" aria-label="Search" />
      </form>
    </header>
  );
};

export default SearchBar;
