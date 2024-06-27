import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {

    const {id, name, email, phone} = user;

    return (
        <div className='p-5 rounded-xl bg-slate-300 ml-3 mb-4'>
            <h2>Name: {name} </h2>
            <p>Phone: {phone} </p>
            <p>Email: {email} </p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes={
    user: PropTypes.object
}

export default User;