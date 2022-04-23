import { v4 as uuid } from "uuid";
// Action Start
export const addBlog = ({ title = "", description = "" }) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    title: title,
    description: description,
  },
});

export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id:id
})

export const blogEdit =(id,update)=>({
    type: "EDIT_BLOG",
    id,
    update
})
// Action END
