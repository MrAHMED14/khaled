"use client";

import { createPostAction } from "@/app/_action";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import Modal from "../ui/Modal";
import { ToastContainer, toast } from "react-toastify";

const AddPostForm = () => {
  const formRef = useRef(null);
  const [modelState, setModelState] = useState(false);

  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching;

  const { data: session } = useSession(authOption);

  const action = async (data) => {
    const title = data.get("title");
    const body = data.get("body");
    const userId = session?.user.id;

    if (title.length >= 1 && body.length >= 1 && userId) {
      //disable btn
      setIsFetching(true);

      await createPostAction(title, body, userId);

      setModelState(false);
      formRef.current?.reset();
      setIsFetching(false);
    } else {
      toast.error("Please check your info", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <button
        className="btn btn-wide mb-5 max-w-sm font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-base-100 dark:text-gray-950 dark:hover:bg-gray-300"
        onClick={() => setModelState(true)}
      >
        New Post
      </button>

      <Modal modelState={modelState} setModelState={setModelState}>
        <div className="flex justify-center p-5 text-gray-950">
          <form ref={formRef} action={action} className="flex flex-col w-full ">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="input border-slate-800 mb-4"
            />

            <label htmlFor="body" className="font-medium ">
              Body
            </label>
            <input
              type="text"
              name="body"
              className="input border-slate-800 mb-4"
            />

            <button
              disabled={isMutating}
              className="btn disabled:cursor-not-allowed font-bold bg-slate-900 hover:bg-slate-800 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddPostForm;
