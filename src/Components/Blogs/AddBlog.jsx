import { Alert } from 'bootstrap';
import React,{useEffect, useState} from 'react';
 
const AddBlog = ({onReceived, blog}) => {

  
  useEffect (() => {
    if (blog) {
      setFormData(blog)
    }
  }, [blog])

    const initialValues = {
        id: 1,
        title: "",
        description: "",
        catogery:"",
        author: "",
        status: "",
        comment: [],
        tags: []
    };
    
    const [formData, setFormData] = useState(initialValues);
    const [error, setError] = useState({});


    let validate = () => {
        const errors = {};
        if (!formData.title) errors.title = "Title is Required.";
        if (!formData.description) errors.description = "Description is Required.";
        if (!formData.category) errors.category = "Category is Required.";
        if (!formData.author) errors.author = "Author is Required.";
        if (!formData.status) errors.status = "Status is Required.";
        if (formData.tags.length == 0) errors.tags = "Select atleast one tag.";
        return errors;
    }

    let handleSubmitForm = (e) => {
        e.preventDefault();
        const valdationErrors = validate();
        setError(valdationErrors);
        if (Object.keys(valdationErrors).length === 0) { 
            onReceived(formData);
            setFormData(initialValues)
        }
    };

    let handleInput = (event) => {
      const { name, value, type, checked } = event.target;
      let updatedTags = [...formData.tags];
      if (type == "checkbox" && name == "tags") {
        if (checked) {
          updatedTags.push(value)
        }
        else {
          updatedTags = updatedTags.filter((tag) => tag !== value);
        }
        setFormData({
          ...formData, 
          tags: updatedTags
        })
      }
      else {
        setFormData({
            ...formData,
            [name]: value   
         })
      }
    };

    return (
      <>
        <h1 className="text-center">{blog ? "Edit Blog" : "Add Blogs"}</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              placeholder="Enter Title"
              onChange={handleInput}
            />
            {error.title && <div className="text-danger">{error.title}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              rows={3}
              cols={3}
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              placeholder="Enter Description"
              onChange={handleInput}
            ></textarea>
            {error.description && (
              <div className="text-danger">{error.description}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              name="category"
              value={formData.category}
              onChange={handleInput}
            >
              <option value="">Select</option>
              <option selected={formData.category == "health"} value="health">Health</option>
              <option selected={formData.category == "technology"} value="technology">Technology</option>
              <option selected={formData.category == "medical"} value="medical">Medical</option>
            </select>
            {error.category && (
              <div className="text-danger">{error.category}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={formData.author}
              placeholder="Enter Author's Name"
              onChange={handleInput}
            />
            {error.author && <div className="text-danger">{error.author}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label> &nbsp; <br />
            Active &nbsp;
            <input
              type="radio"
              className=""
              name="status"
              onChange={handleInput}
              value="ACTIVE"
              checked={formData.status == "ACTIVE"}
            /> &nbsp; &nbsp;
            In-Active &nbsp;
            <input
              type="radio"
              className=""
              name="status"
              onChange={handleInput}
              value="INACTIVE"
              checked={formData.status == "INACTIVE"}
            />
            {error.status && <div className="text-danger">{error.status}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor="tags">Tags</label>
            <div>
              News &nbsp;
              <input
                type='checkbox'
                name='tags'
                onChange={handleInput}
                value="news"
                checked={formData.tags.includes("news") ? true : false}
              /> &nbsp; &nbsp;
              Technology &nbsp;
              <input
                type='checkbox'
                name='tags'
                onChange={handleInput}
                value="technology"
                checked={formData.tags.includes("technology")? true : false}
              /> &nbsp; &nbsp;
              Health &nbsp;
              <input
                type='checkbox'
                name='tags'
                onChange={handleInput}
                value="health"
                checked={formData.tags.includes("health") ? true : false}
              /> 
              {error.tags && <div className="text-danger">{error.tags}</div>}
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </>
    );
}
 
export default AddBlog;