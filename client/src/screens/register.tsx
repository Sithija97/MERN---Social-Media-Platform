"react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TbSocial } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TextInput, Button } from "../components";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmpassword: Yup.string()
    .min(6, "Confirm Password must be at least 6 characters")
    .required("Confirm Password is required"),
});

export const Register = () => {
  const handleRegister = (values: { email: string; password: string }) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });
  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl ">
        {/* left */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-blue rounded text-black">
              <TbSocial />
            </div>
            <span className="text-2xl text-blue font-semibold">ShareFun</span>
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Sign up to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">Welcome</span>
          <form
            className="py-8 flex flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                label="First Name"
                id="firstname"
                name="firstname"
                type="firstname"
                placeholder="First Name"
                styles="w-full rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
                error={
                  formik.touched.firstname && formik.errors.firstname
                    ? formik.errors.firstname
                    : undefined
                }
              />
              <TextInput
                label="Last Name"
                id="lastname"
                name="lastname"
                type="lastname"
                placeholder="Last Name"
                styles="w-full rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
                error={
                  formik.touched.lastname && formik.errors.lastname
                    ? formik.errors.lastname
                    : undefined
                }
              />
            </div>

            <TextInput
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              styles="w-full rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
            />
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                styles="w-full rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : undefined
                }
              />
              <TextInput
                label="Confirm Password"
                id=" confirmpassword"
                name=" confirmpassword"
                type=" confirmpassword"
                placeholder="Confirm Password"
                styles="w-full rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmpassword}
                error={
                  formik.touched.confirmpassword &&
                  formik.errors.confirmpassword
                    ? formik.errors.confirmpassword
                    : undefined
                }
              />
            </div>

            {/* <Link
              to={FORGOTPASSWORD}
              className="'text-sm text-right text-blue font-semibold mb-2"
            >
              Forgot Password ?
            </Link> */}
            <Button
              title="Sign up"
              type="submit"
              styles="inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-black outline-none"
            />
          </form>
          <p className="text-ascent-2 text-sm text-center">
            Already have an account?
            <Link
              to="/login"
              className="text-blue font-semibold ml-2 cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </div>
        {/* right */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-white">
          <div className="relative w-full flex items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/digital-lifestyle-concept-illustration_114360-7327.jpg?w=740&t=st=1702968531~exp=1702969131~hmac=7d58f017f2f341629f67f885e63c5934e456edf32399f3067dd54e414dd49373"
              alt="Bg Image"
              className="max-w-md h-fit object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
