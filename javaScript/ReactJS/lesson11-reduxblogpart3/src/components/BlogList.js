import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";

const BlogList = (props) => {
  return <ul>
    {props.deyer.map(meqale=>{
      return <BlogListItem key={meqale.id} {...meqale} />
    })}
  </ul>;
};

const mapStateToProps = (state) => {
  return {
    deyer:state.itema
  };
};

export default connect(mapStateToProps)(BlogList);
