import React from 'react'

const ProductForm = ({ handleSubmit, handleChange,  values }) => {
    const {
        name,
        price,
    } = values;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Product Name</label>
                <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
            <label>Price</label>
            <input
            type="number"
            name="price"
            className="form-control"
            value={price}
            onChange={handleChange}
            />
        </div>
        <button className="btn btn-outline-info">Save</button>
      </form>
    )
}

export default ProductForm
