import React from 'react';
import { formateDate, truncateText } from '../helper';
import moment from 'moment';


const List = ({ blogs, onEdit }) => {

    function status (status2) {
        if (status2 === "ACTIVE") {
            return("fa-solid fa-circle text-success")
        } else {
            return("fa-solid fa-circle text-danger")
        }
    }

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tital</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Author</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Create At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((blog , index) => {
                            return (
                                <tr key={index}>
                                    <td>{blog.id}</td>
                                    <td>{blog.title}</td>
                                    <td title={blog.description}>{truncateText(blog.description)}</td>
                                    <td>{blog.category}</td>
                                    <td>{blog.author === "" ? "No Author !!" : blog.author}</td>
                                    <td><i className={status(blog.status)}></i></td>
                                    <td>{`${blog.tags}`}</td>
                                    <td>{formateDate(blog.createdAt, "Do MMMM YYYY")}</td>
                                    {/* <td>{moment(blog.createdAt).format("Do MMMM YYYY")}</td> */}
                                    <td>
                                        <button className='btn btn-primary' onClick={() => onEdit(blog)}>Edit</button>                                        
                                    </td>

                                </tr>
                            ) 
                        })         
                    }
                </tbody>
            </table>
        </>
    );  
};

export default List;