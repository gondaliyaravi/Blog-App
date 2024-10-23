import React, { useState } from 'react';
import { truncateText } from './Components/helper';

function Heading({ title, description, author, comment, category, status, tags, createdAt }) {
  let [button, setButton] = useState("fa-regular fa-heart");
  // const btnClassName = `btn btn-${btnClass}`;

  // const author2 = author == "" ? "No Author" : author;

  let author2 = "No Author !!";
  if (author != "") {
    author2 = author;
  }

  const handleButton = () => {
    // alert("you clicked Button !!")
    setButton((unLike) => {
      if (unLike === "fa-regular fa-heart") {
        return "fa-solid fa-heart text-danger";
      } else {
        return "fa-regular fa-heart";
      }
    });
  };
  
    function setColor(status) {
      if (status === "ACTIVE") {
        return "fa-solid fa-circle mr-4 text-success";
      } else {
        return "fa-solid fa-circle mr-4 text-danger";
      }
    }

  return (
    <>
      <div className="col-md-4 text-left">
        <h2>{title}</h2>
        <p className="mb-1" title={description}>
          {truncateText(description)}
        </p>
        <i className={button} onClick={handleButton}></i>
        <small> {comment.length + " Comments"} </small>
        {/* <small>{author}</small> */}
        {/* <small>{author == "" ? "No Author" : author}</small> */}
        <div className="">
          <small className=" m-2">{author2}</small> <br />
          <small>{category}</small> &nbsp;
          <small>{`${tags}`}</small> &nbsp; <br />
          <small>{createdAt}</small>
        </div>
          <p className={setColor(status)}></p>
      </div>
    </>
  );
};

export default Heading;