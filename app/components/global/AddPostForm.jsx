"use client";

import Modal from "../ui/Modal";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { createPostAction } from "@/app/_action";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddPostForm = () => {
  const { resolvedTheme } = useTheme();
  const formRef = useRef(null);
  const [modelState, setModelState] = useState(false);
  const { data: session } = useSession(authOption);

  const action = async (data) => {
    const title = data.get("title");
    const body = data.get("body");
    const userId = session?.user.id;

    if (title.length >= 1 && body.length >= 1 && userId) {
      await createPostAction(title, body, userId);
      setModelState(false);
      formRef.current?.reset();
    } else {
      toast.error("Please check your info", {
        theme: resolvedTheme,
        type: "error",
        autoClose: 2000,
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

            <button className="btn disabled:cursor-not-allowed font-bold bg-slate-900 hover:bg-slate-800 text-white">
              Submit
            </button>
            <p className="text-slate-50 font-medium text-sm p-1 rounded bg-gray-950 mt-1">
              <span className="font-bold text-yellow-400">warning: </span>
              Press submit button once!
            </p>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddPostForm;
