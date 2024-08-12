/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../store/store";
import { updateProfile } from "../store/features/auth";
import { MdClose } from "react-icons/md";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextInput } from ".";
import React, { ChangeEvent, useState } from "react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  profession: Yup.string().required("Profession is required"),
  location: Yup.string().required("Location is required"),
});

export const EditProfile = () => {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [picture, setPicture] = useState<File | null>(null);

  type Inputs = {
    firstName: string;
    lastName: string;
    profession: string;
    location: string;
  };

  const handleSubmit = async (values: Inputs) => {
    console.log(values);
  };

  const handleClose = () => {
    dispatch(updateProfile(false));
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPicture(e.target.files[0]);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      profession: "",
      location: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-[#000] opacity-70"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex justify-between px-6 pt-5 pb-2">
            <label
              htmlFor="name"
              className="block font-medium text-xl text-ascent-1 text-left"
            >
              Edit Profile
            </label>

            <button className="text-ascent-1" onClick={handleClose}>
              <MdClose size={22} />
            </button>
          </div>

          <form
            className="px-4 sm:px-6 flex flex-col gap-3 2xl:gap-6"
            onSubmit={formik.handleSubmit}
          >
            <TextInput
              label="First Name"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              styles="w-full rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : undefined
              }
            />

            <TextInput
              label="Last Name"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              styles="w-full rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              error={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : undefined
              }
            />

            <TextInput
              label="Profession"
              id="profession"
              name="profession"
              type="text"
              placeholder="Profession"
              styles="w-full rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.profession}
              error={
                formik.touched.profession && formik.errors.profession
                  ? formik.errors.profession
                  : undefined
              }
            />

            <TextInput
              label="Location"
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              styles="w-full rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
              error={
                formik.touched.location && formik.errors.location
                  ? formik.errors.location
                  : undefined
              }
            />

            <label
              className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4"
              htmlFor="imgUpload"
            >
              <input
                type="file"
                className=""
                id="imgUpload"
                onChange={(e) => handleSelect(e)}
                accept=".jpg, .png, .jpeg"
              />
            </label>

            {/* {errMsg?.message && (
              <span
                role="alert"
                className={`text-sm ${
                  errMsg?.status === "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )} */}

            <div className="py-5 sm:flex sm:flex-row-reverse border-t border-[#66666645]">
              {isSubmitting ? (
                // <Loading />
                <p>Loading...</p>
              ) : (
                <Button
                  type="submit"
                  styles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
                  title="Submit"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
