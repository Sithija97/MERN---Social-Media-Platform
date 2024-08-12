import { BiImages, BiSolidVideo } from "react-icons/bi";
import { Button, TextInput } from ".";
import { BsFiletypeGif } from "react-icons/bs";
import { RootState, useAppSelector } from "../store/store";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  description: Yup.string().required(
    "Please add a description before posting..."
  ),
});

export const AddPost = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posting, setPosting] = useState(false);

  const handlePost = (values: { description: string }) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handlePost(values);
    },
  });
  return (
    <form
      action=""
      className="bg-primary px-4 rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full flex items-center gap-2 py-4 border-b border-[#66666645]">
        <img
          src={user?.profileUrl}
          alt="user Img"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="mb-4 w-full">
          <TextInput
            className="w-full py-5"
            placeholder="What's on your mind..."
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : undefined
            }
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-4">
        <label
          htmlFor="imgUpload"
          className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer"
        >
          <input
            type="file"
            onChange={(e) => {
              const selectedFile = e.target.files ? e.target.files[0] : null;
              setFile(selectedFile);
            }}
            className="hidden"
            id="imgUpload"
            data-max-size="5120"
            accept=".jpg, .png, .jpeg"
          />
          <BiImages />
          <span>Image</span>
        </label>

        <label
          className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer"
          htmlFor="videoUpload"
        >
          <input
            type="file"
            data-max-size="5120"
            onChange={(e) => {
              const selectedFile = e.target.files ? e.target.files[0] : null;
              setFile(selectedFile);
            }}
            className="hidden"
            id="videoUpload"
            accept=".mp4, .wav"
          />
          <BiSolidVideo />
          <span>Video</span>
        </label>

        <label
          className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer"
          htmlFor="vgifUpload"
        >
          <input
            type="file"
            data-max-size="5120"
            onChange={(e) => {
              const selectedFile = e.target.files ? e.target.files[0] : null;
              setFile(selectedFile);
            }}
            className="hidden"
            id="vgifUpload"
            accept=".gif"
          />
          <BsFiletypeGif />
          <span>Gif</span>
        </label>

        <div>
          {posting ? (
            // <Loading /> - need to add a spinner
            <p>Loading...</p>
          ) : (
            <Button
              type="submit"
              title="Post"
              styles="bg-[#0444a4] text-white py-1 px-6 rounded-full font-semibold text-sm"
            />
          )}
        </div>
      </div>
    </form>
  );
};
