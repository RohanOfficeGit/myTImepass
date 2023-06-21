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
import { Link, useNavigate, useParams } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  let editId = useParams();
  const [first, setFdata] = useState(false);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  let initialValues = {
    name: "",
    price: "",

    addImages1: "",
    addImages2: "",
    addImages3: "",
    addImages4: "",
  };

  console.log("editId", first);

  const handleEditSet = async () => {
    await axios
      .get(`http://localhost:9000/api/getOne/${editId.id}`)
      .then((response) => {
        setFdata(true);
        initialValues.addImages1 = response?.data?.addImages1;
        initialValues.addImages2 = response?.data?.addImages2;
        initialValues.addImages3 = response?.data?.addImages3;
        initialValues.addImages4 = response?.data?.addImages4;
        initialValues.name = response?.data?.name;
        initialValues.price = response?.data?.price;
        setImage(response?.data?.addImages1);
        setImage2(response?.data?.addImages2);
        setImage3(response?.data?.addImages3);
        setImage4(response?.data?.addImages4);
        console.log("Editresponse", response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    handleEditSet();
    console.log(first);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log("i am working");
    }, 1000);
  }, []);

  const handleImage = (event: any, setFieldValue: any) => {
    const preset_key = "hrzxc8tv";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage(res.data.secure_url);
        setFieldValue("addImages1", res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImage2 = (event: any, setFieldValue: any) => {
    const preset_key = "gyq8juvu";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage2(res.data.secure_url);
        setFieldValue("addImages2", res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImage3 = (event: any, setFieldValue: any) => {
    const preset_key = "h2f3sheq";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage3(res.data.secure_url);
        setFieldValue("addImages3", res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImage4 = (event: any, setFieldValue: any) => {
    const preset_key = "swmqmwpy";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage4(res.data.secure_url);
        setFieldValue("addImages4", res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-neutral h-full ">
      <div className="text-[34px] text-center text-base-100 ">
        <label className="mt-7"> Add Products Here</label>
      </div>

      <div className="card w-[90%]  bg-base-100 shadow-xl m-auto mt-5 mb-10">
        <div className="card-body">
          <div className="flex justify-end ">
            <button
              className="btn btn-neutral  w-[10%]"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>

          {/* <form onSubmit={formik.handleSubmit}> */}
          <div className="mt-[2%]  text-center">
            <div className="mt-[2%]">
              <Formik
                // enableReinitialize={true}
                // validateOnChange={true}
                initialValues={initialValues}
                onSubmit={(values) => {
                  // console.log("valuesField", values);

                  if (first === false) {
                    axios
                      .post("api/post", values)
                      .then((response) => {
                        console.log("valueskk", response);
                        navigate("/");
                      })
                      .catch((error) => {
                        console.log("error", error);
                      });
                  } else {
                    axios
                      .patch(
                        `api/update/${editId.id}`,
                        values
                      )
                      .then((response) => {
                        console.log("editres", response);
                        navigate("/");
                      })
                      .catch((error) => {
                        console.log("error", error);
                      });
                  }
                }}
                render={({
                  setValues,
                  values,
                  errors,
                  touched,
                  handleReset,
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
                        <Grid item xs={12} md={3}>
                          <TextField
                            type="file"
                            name="addImages1"
                            onChange={(event) =>
                              handleImage(event, setFieldValue)
                            }
                            // defaultValue={values?.addImages1}
                          />
                          <Grid className="mt-4">
                            <TextField
                              type="file"
                              name="addImages2"
                              onChange={(event) =>
                                handleImage2(event, setFieldValue)
                              }
                              // value={values.addImages2}
                            />
                          </Grid>
                          <Grid className="mt-4">
                            <TextField
                              type="file"
                              name="addImages3"
                              onChange={(event) =>
                                handleImage3(event, setFieldValue)
                              }
                              // value={values.addImages3}
                            />
                          </Grid>
                          <Grid className="mt-4">
                            <TextField
                              type="file"
                              name="addImages4"
                              onChange={(event) =>
                                handleImage4(event, setFieldValue)
                              }
                              // value={values.addImages4}
                            />
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <div
                            style={{
                              height: "60px",
                              width: "60px",

                              marginTop: "2%",
                            }}
                          >
                            <img
                              src={image}
                              alt="add image"
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              height: "60px",
                              width: "60px",
                              marginTop: "2%",
                            }}
                          >
                            <img
                              src={image2}
                              alt="add image"
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              height: "60px",
                              width: "60px",
                              marginTop: "2%",
                            }}
                          >
                            {" "}
                            <img
                              src={image3}
                              alt="add image"
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              height: "60px",
                              width: "60px",
                              marginTop: "2%",
                            }}
                          >
                            <img
                              src={image4}
                              alt="add image"
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                        </Grid>

                        {/* -------------------------------------without fieldarray code till here------------------------------------------------ */}

                        {/* <Grid
                          item
                          xs={12}
                          md={6}
                          style={{ display: "flex", gap: "5%" }}
                        >
                          <label>Add Product Images</label>
                          <FieldArray
                            name="addImages"
                            render={(arrayHelpers) => (
                              <div>
                                {values.addImages &&
                                values.addImages.length > 0 ? (
                                  values.addImages.map((friend, index) => (
                                    <div key={index}>
                                      <TextField
                                        type="file"
                                        name={`addImages.${index}`}
                                        onChange={handleImage}
                                      />
                                     
                                     
                                    </div>
                                  ))
                                ) : (
                                  <button
                                    fullWidth
                                    type="button"
                                    onClick={() => arrayHelpers.push("")}
                                  >
                                   
                                    Add Images
                                  </button>
                                )}
                              </div>
                            )}
                          />
                        </Grid>  */}

                        {/* ------------------------------fieldArray code end here------------------------------------- */}
                        {/* mt={2}  */}
                        <div className="mt-2 mb={2} text-center">
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
                            // fullWidth
                          >
                            Save Information
                          </button>
                        </Grid>
                      </Grid>
                    </Form>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
};

export default SignUp;
