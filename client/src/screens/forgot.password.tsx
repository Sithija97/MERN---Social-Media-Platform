import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextInput } from "../components";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

export const ForgotPassword = () => {
  const handleResetPassword = (values: { email: string }) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleResetPassword(values);
    },
  });
  return (
    <div className="w-full h-[100vh] bg-bgColor flex items-center justify-center p-6">
      <div className="bg-primary w-full md:w-1/3 2xl:w-1/4 px-6 py-8 shadow-md rounded-lg">
        <p className="text-ascent-1 text-lg font-semibold">Email Address</p>
        <span className="text-sm text-ascent-2">
          Enter email address used during registration
        </span>
        <form
          onSubmit={formik.handleSubmit}
          className="py-4 flex flex-col gap-5"
        >
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

          <Button
            title="Sign in"
            type="submit"
            styles="inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-black outline-none"
          />
        </form>
      </div>
    </div>
  );
};
