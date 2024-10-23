import React, { useState } from 'react';
import Blogs from './Blogs/Blogs';
import List from './Blogs/List';
import AddBlog from './Blogs/AddBlog';
import Search from './Search';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

function About() {

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First",
      description:
        "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, recusandae!.",
      author: "- Ravi",
      status: "ACTIVE",
      comment: [
        { id: 1, title: "Comment-1" },
        { id: 2, title: "Comment-2" },
      ],
      tags: ["Technology", "news", "health"],
      createdAt: "2024-08-01",
      category:"medical"
    },
    {
      id: 2,
      title: "Second",
      description:
        "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, recusandae!.",
      author: "Ajay",
      status: "IN-ACTIVE",
      comment: [
        { id: 1, title: "Comment-1" },
        { id: 2, title: "Comment-2" },
        { id: 3, title: "Comment-3" },
      ],
      tags: ["Health", "Technology"],
      createdAt: "2024-08-22",
      category:"health"
    },
    {
      id: 3,
      title: "Third",
      description:
        "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, recusandae!.",
      author: "David",
      status: "ACTIVE",
      comment: [
        { id: 1, title: "Comment-1" },
        { id: 2, title: "Comment-2" },
        { id: 3, title: "Comment-3" },
        { id: 4, title: "Comment-4" },
      ],
      tags: ["News", "Health"],
      createdAt: "2024-03-18",
      category:"technology"
    },
    {
      id: 4,
      title: "Fourth",
      description:
        "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, recusandae!.",
      author: "Jack",
      status: "IN-ACTIVE",
      comment: [
        { id: 1, title: "Comment-1" },
        { id: 2, title: "Comment-2" },
        { id: 3, title: "Comment-3" },
        { id: 4, title: "Comment-4" },
        { id: 5, title: "Comment-5" },
      ],
      tags: ["Technology", "News"],
      createdAt: "2024-09-21",
      category:"medical"
    },
    {
      id: 5,
      title: "Fifth",
      description:
        "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, recusandae!.",
      author: "John",
      status: "ACTIVE",
      comment: [
        { id: 1, title: "Comment-1" },
        { id: 2, title: "Comment-2" },
        { id: 3, title: "Comment-3" },
        { id: 4, title: "Comment-4" },
        { id: 5, title: "Comment-5" },
        { id: 6, title: "Comment-6" },
      ],
      tags: ["News", "Technology"],
      createdAt: "2024-03-15",
      category:"health"
    },
    {
      id: 6,
      title: "Sixth",
      description:
        "6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, recusandae!.",
      author: "Shyam",
      status: "IN-ACTIVE",
      comment: [
        { id: 1, title: "Comment-1" },
        { id: 2, title: "Comment-2" },
        { id: 3, title: "Comment-3" },
        { id: 4, title: "Comment-4" },
        { id: 5, title: "Comment-5" },
        { id: 6, title: "Comment-6" },
        { id: 7, title: "Comment-7" },
      ],
      tags: ["Technology", "Health"],
      createdAt: "2024-12-19",
      category:"technology"
    },
  ]);

  const [mode, setMode] = useState("icon");
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [editBlog, setEditBlog] = useState(null);

  function handleChangeMode() {
    setMode(mode === "list" ? "icon" : "list");
  }

  let handleReceivedData = (finalBlog) => {

    let msg = "";

    if (editBlog) {
      let updatedBlogs = blogs.map((blog) => {
        return blog.id === finalBlog.id ? finalBlog : blog
      });
      setBlogs(updatedBlogs);
      msg = "Blog updated Succesfully..."
    }
    else {     
      setBlogs([...blogs, finalBlog]);
      finalBlog.id = blogs.length + 1;
      msg = "Blog Added Succesfully..."
    }
    setShowAddBlog(false);
    toast.success(msg);
  };

  let handleSearchText = (searchText) => {
    searchText = searchText.toLowerCase();
    let filteredBlogs = blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchText) ||
        blog.description.toLowerCase().includes(searchText) ||
        blog.author.toLowerCase().includes(searchText)
      );
    });
    setBlogs(filteredBlogs);
  };

  const handleEditBlog = (blog) => {
    setShowAddBlog(true);
    setEditBlog(blog);
    
  };

  return (
    <>
      <Navbar handleSearchText={handleSearchText} />
      <div className="container">
        <p className="text-right">
          <i
            className={
              mode === "list"
                ? "fa-solid fa-table-list"
                : "fa-solid fa-list-check"
            }
            onClick={handleChangeMode}
          ></i>
          <button
            className="btn btn-sm btn-primary ml-2"
            onClick={()=>{ setShowAddBlog(!showAddBlog); setEditBlog(null) }}
            // style={{ border: "none" }}
          >
            {showAddBlog ? "Close" : "Add Blog"}
          </button>
        </p>
        
        {/* {loadHeading && <Heading title={blogs[0].title} description={blogs[0].description} author={blogs[0].author} btnClass="success"/>} */}
        {/* <Heading title={blogs[1].title} description={blogs[1].description} author={blogs[1].author} btnClass="warning"/>
          <Heading title={blogs[2].title} description={blogs[2].description} author={blogs[2].author} />
          */}

        {showAddBlog && <AddBlog onReceived={handleReceivedData} blog={editBlog} />}
        <Search onReceived={handleSearchText} />
        {mode === "icon" && <Blogs blogs={blogs} />}
        {mode === "list" && <List blogs={blogs} onEdit={handleEditBlog} />}
        <hr />
      </div>
    </>
  );
};

export default About;


