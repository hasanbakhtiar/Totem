import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ title, id }) => {
  return (
    <li className="mt-2">
      {title} -{" "}
      <Link className="btn btn-success" to={`/blog/${id}`}>
        description
      </Link>
      <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
    </li>
  );
};

export default BlogListItem;
