"react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TbSocial } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FORGOTPASSWORD } from "../routes/router";
import TextInput from "../components/textInput";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const Login = () => {
  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* left */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#BEADFA] rounded text-black">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#BEADFA] font-semibold">
              ShareFun
            </span>
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Log in to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">Welcome back</span>
          <form
            className="py-8 flex flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <TextInput
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
            />

            <TextInput
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
            />

            <Link
              to={FORGOTPASSWORD}
              className="'text-sm text-right text-[#BEADFA] font-semibold mb-2"
            >
              Forgot Password ?
            </Link>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-[#BEADFA] px-8 py-3 text-sm font-medium text-black outline-none"
            >
              Submit
            </button>
          </form>
          <p className="text-ascent-2 text-sm text-center">
            Don't have an account?
            <Link
              to="/register"
              className="text-[#BEADFA] font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* right */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-[#BEADFA]">
          <div className="relative w-full flex items-center justify-center">
            <img
              src=" https://as2.ftcdn.net/v2/jpg/05/61/63/47/1000_F_561634789_johaTtfGZtpTsKFzFfVn6OZRQAm7YibW.jpg"
              alt="Bg Image"
              className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
            />
          </div>
          <div className="mt-16 text-center">
            <p className="text-back text-base">
              Connect with friedns & have share for fun
            </p>
            <span className="text-sm text-black/80">
              Share memories with friends and the world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
