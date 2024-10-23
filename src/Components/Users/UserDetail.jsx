import { useNavigate, useParams } from "react-router-dom";
import Home from "../Home";
import { useEffect, useState } from "react";
import { getReqest } from "../../API/apiService";

const UserDetail = () => {

    const {user_id} = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // getReqest(`/users/${user_id}`, setUser);
        const fetchUsersDetail = async () => { 
            const result = await getReqest(`users/${user_id}`)
            setUser(result);
        };
        fetchUsersDetail();
    },[]);

    return ( 
        <>
            <Home />
            <div className="container text-center">
                {user ? (
                    <>
                        <div className="d-flex flex-column align-items-center">
                            <h1 className="p-1">{user.first_name} {user.last_name}</h1> 
                            <p className="p-1">{user.email}</p> 
                            <img className="p-1" src={user.avatar} width="100" height="100" />
                            <button className="btn btn-sm btn-primary mt-2" onClick={()=> navigate(-1) }>Go Back</button>
                        </div>
                    </>
                )
                  : ("Please Wait...")  
                }
            </div>
        </>
     );
}
 
export default UserDetail;