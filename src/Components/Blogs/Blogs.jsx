import React from 'react';
import Heading from '../../Heading';
import { formateDate } from '../helper';

const Blogs = ({blogs}) => {

    return ( 
        <>
            <div className="row">
                
                {
                    blogs.map((blog) => {
                        return (
                          <Heading
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            author={blog.author}
                            comment={blog.comment}
                            category={blog.category}
                            status={blog.status}
                            tags={blog.tags}
                            createdAt={formateDate(blog.createdAt)}
                          />
                        );
                    })         
                }
        </div>

        </>
     );
}
 
export default Blogs;