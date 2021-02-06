import axios from "axios";


//Create blog 
export const createBlog = async (product, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/blog`, product, {
    headers: {
      authtoken,
    },
  });


  //get all blog
export const getblogs = async () =>
  await axios.get(`${process.env.REACT_APP_API}/blogs`);


  //remove Single blog
  export const removeBlog = async (_id, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/blog/${_id}`, {
    headers: {
      authtoken,
    },
  });

//fetch single blog
  export const getBlog = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/blog/${_id}`);

  //update blogs
  export const updateBlog = async (_id, product, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/blog/${_id}`, product, {
    headers: {
      authtoken,
    },
  });