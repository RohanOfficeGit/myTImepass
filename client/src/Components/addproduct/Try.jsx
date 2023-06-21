import React, { useEffect, useState } from "react";

import { FieldArray, Formik, useFormik, Form } from "formik";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  // let initialValues = {

  // };

  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues: {
  //     username: "",
  //     mobileNo: "",
  //     email: "",
  //     password: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log("asdfghjk", values);

  //     // const data ={
  //     //   email:values.email,
  //     //   mobileNo:values.mobileNo,
  //     //   password:values.password,
  //     //   username:values.username,
  //     //   role:"user"
  //     // }
  //     // axios
  //     //   .post("http://localhost:5000/api/users/register", data)
  //     //   .then((response) => {
  //     //     console.log("valueskk", response);
  //     //     navigate("/signin")

  //     //   })
  //     //   .catch((error) => {
  //     //     console.log("error", error);
  //     //   });

  //     console.log("values", values);
  //   },
  // });
  return (
    <div className="bg-neutral h-screen">
      <div className="text-[34px] text-center text-base-100 ">
        Add Products Here
      </div>

      <div className="card w-[90%]  bg-base-100 shadow-xl m-auto">
        <div className="card-body">
          {/* <h2 className="card-title">Shoes!</h2> */}

          {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}

          {/* <form onSubmit={formik.handleSubmit}> */}
          <div className="mt-[2%]  text-center">
            <div className="mt-[2%]">
              <Formik
                // enableReinitialize={true}
                // validateOnChange={true}
                initialValues={{ name: "", price: "", addImages: [
                  {
                    images:""
                  }
                ] }}
                onSubmit={(values) => {
                  console.log("valuesField", values);

                  // const data = {
                  //   role: "admin",
                  //   name: values.name,
                  //   email: values.email,
                  //   biography: values.biography,
                  //   // specialization: tags,
                  //   address: values.address,
                  //   videoType: values.videoType,
                  //   education: values.addImages,
                  //   experience: values.experience,
                  //   additionalWork: values.additionalWork,
                  // };

                  // axios
                  //   .post("http://localhost:4000/api/admin/accounts", data, {
                  //     headers: {
                  //       Authorization:
                  //         "Bearer " + JSON.parse(localStorage.getItem("token")),
                  //     },
                  //   })
                  //   .then((response) => {
                  //     console.log("dataAccounts", response.status);
                  //     if (response.status !== 200) {
                  //       alert(`Unable to save this data!`);
                  //     } else {
                  //       alert(`Details Saved!`);
                  //     }
                  //   })
                  //   .catch((error) => {
                  //     console.log("error", error);
                  //   });
                }}
                render={({
                  setValues,
                  values,
                  errors,
                  touched,
                  handleReset,
                  handleSelect,
                  handleChange,
                  setFieldValue,
                }) => {
                  return (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                          <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            required
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            
                          />
                        </Grid>
                       
                        <Grid item xs={12} md={3}>
                          
                          <TextField
                            fullWidth
                            required
                            label="Price"
                            variant="outlined"
                            type="number"
                            name="price"
                            onChange={handleChange}
                            value={values.price}
                          />
                        </Grid>

                        {/* -------------------------------------without fieldarray code till here------------------------------------------------ */}

                        <Grid item xs={12} md={6}>
                          <FieldArray
                            name="addImages"
                            render={(arrayHelpers) => (
                              <div>
                                {values?.addImages &&
                                values?.addImages.length > 0 ? (
                                  values?.addImages?.map((friend, index) => (
                                    <div key={index}>
                                      <input
                                        type="file"
                                        name={`addImages.${index}.images`}
                                        onChange={(event) =>
                                          setFieldValue(
                                            `addImages.${index}.images`,
                                            event.target.files[0]
                                          )
                                        }
                                      />
                                      <Button
                                        variant="contained"
                                        color="info"
                                        size="small"
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </Button>
                                      <Button
                                        variant="contained"
                                        color="info"
                                        size="small"
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, "")
                                        } // insert an empty string at a position
                                      >
                                        +
                                      </Button>
                                    </div>
                                  ))
                                ) : (




                                  
                                  <button
                                  fullWidth
                                    className="btn btn-outline"
                                    type="button"
                                    onClick={() => arrayHelpers.push("")}
                                  >
                                    {/* show this when user has removed all addImages from the list */}
                                    Add Images
                                  </button>
                                )}
                              </div>
                            )}
                          />
                        </Grid>

                        {/* ------------------------------fieldArray code end here------------------------------------- */}

                        <div mt={2} mb={2} textAlign="center">
                          <h6
                            style={{
                              fontSize: ".8em",
                              color: "red",
                              textAlign: "center",
                              fontWeight: 400,
                              transition: ".2s all",
                            }}
                          >
                            {/* {error} */}
                          </h6>
                        </div>
                        <Grid item xs={12} mt={4} mb={1}>
                          <button
                            className="btn btn-primary"
                            type="submit"
                            fullWidth
                          >
                            Save Information
                          </button>
                        </Grid>
                      </Grid>
                    </Form>
                  );
                }}
              />

              <a
                className="btn btn-neutral"
                onClick={() => navigate("/signin")}
              >
                already registred click here
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
};

export default SignUp;
