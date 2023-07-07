"use client";

import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from "react-toastify";

const UserProfileForm = () => {
  const { data: session, update } = useSession();
  const { resolvedTheme } = useTheme();

  async function handleSubmit(formData) {
    const { name } = Object.fromEntries(formData.entries());
    const email = session?.user?.email;
    if (!name || !email) return;

    // Server action
    // await updateName(name, email)

    // Update next-auth session
    //await update({ name });

    // Show a toast notification
    toast("Your name has been updated successfully.", {
      theme: resolvedTheme,
      type: "success",
      autoClose: 2000,
    });
  }

  return (
    <div className="mt-12 w-2/3 bg-white text-gray-950 rounded-lg p-8 shadow-lg lg:w-1/2">
      <h2 className="mb-6 text-lg font-medium">Update your username</h2>

      <form action={handleSubmit} className="flex justify-between gap-3">
        <input
          type="text"
          name="name"
          className="input border-slate-900 flex-1 border px-2 py-1"
          defaultValue={session?.user?.name}
        />
        <button className="rounded bg-slate-700 px-3 py-1 text-white">
          Update
        </button>
      </form>
      <p className="text-red-500 font-medium text-sm mt-1">
        <span className="font-bold">Note: </span>This feature is under
        constructions
      </p>

      <ToastContainer />
    </div>
  );
};

export default UserProfileForm;
