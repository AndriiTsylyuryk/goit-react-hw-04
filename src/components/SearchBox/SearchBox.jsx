import { Formik, Field, Form } from "formik";
import React from "react";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <Formik>
        <Form>
          <label>
            <span>Search</span>
            <Field
              name="search"
              value={value}
              onChange={(e) => {
                onFilter(e.target.value);
              }}
            />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
