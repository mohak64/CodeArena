import React from 'react'
import {  useNavigate } from 'react-router-dom'

import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';

import { registerUser } from '../helper/helper'


import styles from '../styles/Username.module.css';
function CreateContest() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues : {
      email: '',
      username: '',
      password : ''
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values)
      let registerPromise = registerUser(values)
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success : <b>Register Successfully...!</b>,
        error : <b>Could not Register.</b>
      });

      registerPromise.then(function(){ navigate('/')});
    }
  })

  return (
    <>
      <div className="container mx-auto ">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center pb-5">
          <div className={styles.glass2} style={{ paddingTop: "3em" }}>
            <div className="title flex flex-col items-center"></div>
            <h4 className="text-5xl text-center font-bold">Create Contest</h4>
            {/* <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter the Contest ID..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter the Question 1..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter the Input TestCases for Q1..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Expected Output for Q1..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter the Question 2..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter the Input TestCases for Q2..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Expected Output for Q2..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter the Question 3..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter the Input TestCases for Q3..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Expected Output for Q3..
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div> */}
            <div className="textbox flex flex-col items-center my-5 gap-6">
                <input {...formik.getFieldProps('contestId')} className={styles.textbox2} type="text" placeholder='contest Id*' />
                <input {...formik.getFieldProps('ques1d')} className={styles.textbox2} type="text" placeholder='Q1 Description*' />
                <input {...formik.getFieldProps('ques1i')} className={styles.textbox2} type="text" placeholder='Q1 Input Test Cases*' />
                <input {...formik.getFieldProps('ques1o')} className={styles.textbox2} type="text" placeholder='Q1 Expected Output*' />
                <input {...formik.getFieldProps('ques2d')} className={styles.textbox2} type="text" placeholder='Q2 Description*' />
                <input {...formik.getFieldProps('ques2i')} className={styles.textbox2} type="text" placeholder='Q2 Input Test Cases*' />
                <input {...formik.getFieldProps('ques2o')} className={styles.textbox2} type="text" placeholder='Q2 Expected Output*' />
                <input {...formik.getFieldProps('ques3d')} className={styles.textbox2} type="text" placeholder='Q3 Description*' />
                <input {...formik.getFieldProps('ques3i')} className={styles.textbox2} type="text" placeholder='Q3 Input Test Cases*' />
                <input {...formik.getFieldProps('ques3o')} className={styles.textbox2} type="text" placeholder='Q3 Expected Output*' />
                <button className={styles.btn} type='submit'>Create Contest</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateContest;
