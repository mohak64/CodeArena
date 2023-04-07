import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import Logo from "../assets/Logo.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
import styles from "../styles/Username.module.css";
import Ques from "./Ques";



export default function ContestPage() {

  

  return (
    <>
    <div style={{ backgroundColor: "#f8ddfc" }}>
    <Ques
     contestId={"bjcbwbcwbcjbwjbc"}
     ques1d={"Given an integer array nums, return the number of subarrays filled with 0. A subarray is a contiguous non-empty sequence of elements within an array."}
     ques1i={"nums = [1,3,0,0,2,0,0,4] nums = [0,0,0,2,0,0]"}
     ques1o={"6 9"}
     ques2d={"bjcbwbcwbcjbwjbc"}
     ques2i={"bjcbwbcwbcjbwjbc"}
     ques2o={"bjcbwbcwbcjbwjbc"}
     ques3d={"bjcbwbcwbcjbwjbc"}
     ques3i={"bjcbwbcwbcjbwjbc"}
     ques3o={"bjcbwbcwbcjbwjbc"}
     start={"bjcbwbcwbcjbwjbc"}
     end={"bjcbwbcwbcjbwjbc"}
    />
      {/* <div className="container mx-auto">
        <div className="card my-3">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card my-3">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}

//  contestPage
