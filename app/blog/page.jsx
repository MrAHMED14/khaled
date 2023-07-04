import getAllPost from "@/libs/posts";
import AddPostForm from "@/components/global/AddPostForm";
import Post from "@/components/global/Post";
const Blog = async () => {
  const { posts } = await getAllPost();
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <AddPostForm />
        <div className="flex flex-col gap-5">
          {posts?.reverse().map((post) => (
            <Post
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Blog;
