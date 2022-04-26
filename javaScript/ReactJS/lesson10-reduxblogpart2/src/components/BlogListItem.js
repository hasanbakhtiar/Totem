import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = ({title,id}) => {
  return (
    <li>{title} - <Link to={`/blog/${id}`}>description</Link> </li>
  )
}

export default BlogListItem