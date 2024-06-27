import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {username, website} = user;

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div className="border border-purple-500">
            <h3 className="font-bold">Details About users:</h3>
            <p className="font-semibold">UserName: {username} </p>
            <p className="font-semibold">Website: {website} </p>
            <div>
                <button className="border-4 border-red-600 p-1 m-2 bg-black text-white font-medium" onClick={handleGoBack} >Go Back</button>
            </div>
        </div>
    );
};

export default UserDetails;