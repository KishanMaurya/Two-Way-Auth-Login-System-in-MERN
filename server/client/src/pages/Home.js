import React, { useEffect, useState } from "react";
import { getblogs } from "../functions/blog";
import ViewCard from "../components/Card/ViewCard";

const Home = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux

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
    return (
        <>
        <div className="jumbotron text-danger h1 text-center font-weight-bold">
             <h1>All Blogs Here</h1>
          </div>
          <div className="container">
            {loading ? (
                <h4 className="text-danger">Loading...</h4>
            ) : (
              <div className="row">
                  {products ? (
                    products.map((product) => (
                      <div key={product._id} className="col-md-3 pb-3">
                          <ViewCard
                          product={product}
                          />
                      </div>
                  ))) : (<h5 className="text-danger">Product Not Found</h5>)}
              </div>
            )}
            </div>
        </>
    )
}

export default Home
