import { Formik, Field, Form } from "formik";
import React from "react";

const SearchBar = ({setQuery,}) => {
  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query);
  };
  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
