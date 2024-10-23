import { useEffect, useState } from "react";
import Home from "../Home";
import { getReqest } from "../../API/apiService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsers } from "../../Redux/userReduser";

const Users = () => {

    const [allUsers, setAllUsers] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        // getReqest('/users', setAllUsers);
        const fetchUsers = async () => {
            const result = await getReqest('users');
            setAllUsers(result);
            dispatch(setUsers(result.length));
        };
        fetchUsers();
    }, []);
    
    // useEffect(() => {
    //     getReqest('/users', setAllUsers);
    // },[]);

    return ( 
        <>
            {/* <Home /> */}
            <div className="container">
                <div className='p-5'></div>
                <div className="m-5">
                    <h1 className="text-center">Users</h1>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td scope="row">{user.id}</td>
                                    <td>
                                        <Link to={`/users/${user.id}`}> {user.first_name} </Link>
                                    </td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img src={user.avatar} width="50" height="50" />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default Users;