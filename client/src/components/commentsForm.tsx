import { useState } from "react";
import { RootState, useAppSelector } from "../store/store";
import NoProfile from "../assets/userprofile.png";
import { Button, TextInput } from ".";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  comment: Yup.string().required("Please add a text before commenting..."),
});

interface IProps {
  id: string;
  replyAt?: string;
  getComments: (id: string) => void;
}

export const CommentsForm = ({ id, replyAt, getComments }: IProps) => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // handlePost(values);
      console.log(values);
    },
  });
  return (
    <form
      className="w-full border-b border-[#66666645]"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full flex items-center gap-2 py-4">
        <img
          src={user?.profileUrl ?? NoProfile}
          alt="User Image"
          className="w-10 h-10 rounded-full object-cover"
        />
        <TextInput
          className="w-full py-5"
          placeholder="What's on your mind..."
          id="comment"
          name="comment"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
          error={
            formik.touched.comment && formik.errors.comment
              ? formik.errors.comment
              : undefined
          }
        />
      </div>
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

      <div className="flex items-end justify-end pb-2">
        {loading ? (
          //   <Loading />
          <p>Loading...</p>
        ) : (
          <Button
            title="Submit"
            type="submit"
            styles="bg-[#0444a4] text-white py-1 px-3 rounded-full font-semibold text-sm"
          />
        )}
      </div>
    </form>
  );
};
