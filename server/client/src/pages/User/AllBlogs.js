import React, { useEffect, useState } from "react";
import UserNav from '../../components/nav/UserNav'
import { getblogs , removeBlog } from "../../functions/blog";
import BlogCard from "../../components/Card/BlogCard";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
const AllBlogs = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getblogs(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (_id) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeBlog(_id, user.token)
        .then((res) => {
          loadAllProducts();
          setLoading(true)
          toast.error(`${res.data.name} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>

        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="my-4">All Blogs</h4>
          )}
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-3 pb-3">
                <BlogCard
                  product={product}
                  handleRemove={handleRemove}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
