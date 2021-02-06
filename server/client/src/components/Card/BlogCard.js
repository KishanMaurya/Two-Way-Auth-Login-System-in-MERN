import React from "react";
import { Card } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

const BlogCard = ({ product , handleRemove }) => {
  const { images, name, price , _id } = product;
  return (
    <>
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : ""}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1" alt="selfie"
        />
      }
      actions={[
        <Link to={`/user/blog/${_id}`}><EditOutlined className="text-warning" /></Link>,
        <DeleteOutlined
          onClick={() => handleRemove(_id)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        title={name}
        description={`Rs. ${price}`}
      />
    </Card>
    </>
  );
};

export default BlogCard;
