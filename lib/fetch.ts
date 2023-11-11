import axios from "axios";

export const createClass = async ({
  values,
}: {
  values: any;
}) => {
  'use server'
  // console.log(values.name);
  try {
    await axios.post("/api/classes", values);

    // form.reset();
    // onClose();
  } catch (error) {
    console.log(error);
  }
};
