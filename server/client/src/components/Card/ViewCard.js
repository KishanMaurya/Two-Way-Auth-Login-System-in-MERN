import React from "react";
import { Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

const BlogCard = ({ product  }) => {
  const { images, name, price , slug } = product;
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
        <Link to={`/admin/product/${slug}`}><EyeOutlined className="text-warning" /> view</Link>,
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
