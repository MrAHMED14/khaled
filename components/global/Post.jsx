import { findUserById } from "@/libs/users";
import Image from "next/image";

const Post = async ({ userId, title, body, createdAt }) => {
  const { users: user } = await findUserById(userId);
  const date = createdAt.toLocaleDateString();
  const time = createdAt.toLocaleTimeString();
  return (
    <div className="card w-[300px] min-[400px]:w-96 lg:w-[500px] bg-base-100 shadow-xl">
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <div className="flex items-center gap-1 min-[400px]:gap-3">
          <div className="relative h-10 w-10">
            <Image
              src={user[0].image}
              alt={user[0].name}
              className="inline-block rounded-full"
              fill
            />
          </div>

          <h3 className="font-medium">{user[0].name}</h3>
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{date} </p>
          <span className="text-[8px]">{time}</span>
        </div>
      </div>

      <div className="card-body pt-0">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default Post;
