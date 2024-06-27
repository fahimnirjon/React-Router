import { useLoaderData } from "react-router-dom";
import User from "./User/User";

const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div className="">
            <h2>Users: {users.length} </h2>
            <p>Our Satisfied Users</p>
            <div className="grid grid-cols-3 ml-6">
                {
                    users.map(user=> <User key={user.id} user={user}></User> )
                }
            </div>
        </div>
    );
};

export default Users; 