import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [listing, setListing] = useState<any[]>([]);
  const [editData, setEditData] = useState({});

  const getAllData = () => {
    axios
      .get("/api/getAll")
      .then((response) => {
        console.log("response", response);
        setListing(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const deleteListItem = (id: any) => {
    axios
      .delete(`/api/delete/${id}`)
      .then((response) => {
        getAllData();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      {/* -------------------------navbar starts here--------------------- */}
      <div>
        <Navbar />
      </div>
      {/* -------------------------navbar end here--------------------- */}

      <div>
        {listing && listing.map((elem) => {
          return (
            <div className="h-full w-[90%] mt-4  m-auto  ">
              <div className="card card-side bg-base-100 shadow-xl  ">
                <div className="w-[80%] grid grid-cols-4 gap-4 bg-base-200 ">
                  <div
                    className="py-2 m-auto   bg-base-200" 
                    style={{ height: "220px", width: "220px" }}
                  >
                    <img
                      src={elem?.addImages1}
                      alt="Movie"
                      className="ml-2 "
                      style={{
                        // border: "solid 6px black",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  <div
                    className="py-2 m-auto  bg-base-200" 
                    style={{ height: "220px", width: "220px" }}
                  >
                    <img
                      src={elem?.addImages2}
                      alt="Movie"
                      style={{
                        // border: "solid 6px black",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="py-2 m-auto  bg-base-200" 
                    style={{ height: "220px", width: "220px" }}
                  >
                    <img
                      src={elem?.addImages3}
                      alt="Movie"
                      style={{
                        // border: "solid 6px black",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="py-2 m-auto  bg-base-200" 
                    style={{ height: "220px", width: "220px" }}
                  >
                    <img
                      src={elem?.addImages4}
                      alt="Movie"
                      style={{
                        // border: "solid 6px black",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>

                <div className="card-body w-[25%] bg-base-200">
                  <div className="card-actions grid gap-2 grid-cols-2 ">
                    <button
                      className="btn btn-sm btn-neutral"
                      onClick={() => navigate(`/signup/${elem?._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => deleteListItem(elem?._id)}
                    >
                      Delete
                    </button>
                  </div>
                  <h2 className="card-title text-center mt-8 m-auto">
                    {elem?.name}
                  </h2>

                  <div className="card-actions justify-center">
                    <button className="btn btn-primary  w-40">
                      ₹ {elem?.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
