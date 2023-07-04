"use client";

import { createPostAction } from "@/app/_action";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import Modal from "../ui/Modal";

const AddPostForm = () => {
  const formRef = useRef(null);
  const [modelState, setModelState] = useState(false);
  const { data: session } = useSession(authOption);

  const action = async (data) => {
    const title = data.get("title");
    const body = data.get("body");
    const userId = session?.user.id;
    await createPostAction(title, body, userId);
    setModelState(false);
    formRef.current?.reset();
  };
  return (
    <>
      <button
        className="btn btn-wide max-w-sm font-bold bg-slate-900 text-white hover:bg-slate-800"
        onClick={() => setModelState(true)}
      >
        New Post
      </button>

      <Modal modelState={modelState} setModelState={setModelState}>
        <div className="flex justify-center p-5">
          <form ref={formRef} action={action} className="flex flex-col w-full ">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="input input-bordered input-accent mb-4"
            />

            <label htmlFor="body" className="font-medium ">
              Body
            </label>
            <input
              type="text"
              name="body"
              className="input input-bordered input-accent  mb-4"
            />

            <button className="btn font-bold bg-emerald-400 hover:bg-emerald-600 text-white">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddPostForm;
