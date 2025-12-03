import { addPost } from "./post-action";

function PostForm() {
  return (
    <form action={addPost} className="flex flex-col">
      <input type="text" name="title" placeholder="title" />
      <textarea name="content" placeholder="content" />
      <button>Add Post</button>
    </form>
  );
}

export default PostForm;
