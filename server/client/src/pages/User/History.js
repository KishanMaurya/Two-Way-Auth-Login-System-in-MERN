import React, { useState } from 'react'
import UserNav from '../../components/nav/UserNav'
import { toast } from "react-toastify";
import {  useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import FileUpload from "../../components/forms/FileUpload"
import ProductForm from '../../components/forms/ProductForm'
import { createBlog } from "../../functions/blog"

const initialState = {
    name: "Macbook Pro",
    price: "45000",
    images: []
};
const History = () => {
    let { user } = useSelector((state) => ({ ...state }));


    const [values, setValues] = useState(initialState);
    const [loading, setLoading]= useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlog(values, user.token)
          .then((res) => {
            console.log(res);
            toast.success(`"${res.data.name}" is created`);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.err);
          });
      };

      const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-2">
                <UserNav />
            </div>
                <div className="col">
                {loading ? (
                    <LoadingOutlined className="text-danger h1" />
                ) : (
                    <h4 className="mt-3">Create Blog</h4>
                )}
                <div className="p-3 mt-4">
                    <FileUpload values={values} 
                    setValues={setValues} 
                    setLoading={setLoading} />
                </div>
                <ProductForm
                    handleSubmit={handleSubmit}
                    setValues={setValues}
                    values={values}
                    handleChange={handleChange}
                />
                </div>
            </div>
        </div>
    )
}

export default History
