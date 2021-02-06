import React, { useState, useEffect } from 'react'
import UserNav from '../../components/nav/UserNav'
import { toast } from "react-toastify";
import {  useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import FileUpload from "../../components/forms/FileUpload"
import ProductForm from '../../components/forms/ProductForm'
import { getBlog, updateBlog } from "../../functions/blog"

const initialState = {
    name: "Macbook Pro",
    price: "45000",
    images: []
};
const UpdateBlogs = ({ match , history}) => {
    let { user } = useSelector((state) => ({ ...state }));
    const { _id } = match.params;

    const [values, setValues] = useState(initialState);
    const [loading, setLoading]= useState(false);
    

    useEffect(() => {
        loadProduct();
      }, []);

    const loadProduct = () => {
        getBlog(_id).then((p) => {
          setValues({ ...values, ...p.data });
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        updateBlog(_id, values , user.token)
        .then((res) =>{
          setLoading(false);
          toast.success(`${res.data.name} is updated successfully`)
          history.push('/user/viewblog')
        }).catch((err) =>{
          console.log(err)
          toast.error(err.response.data)
        })
    
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
                    <h4 className="mt-3">Update Blog</h4>
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

export default UpdateBlogs
