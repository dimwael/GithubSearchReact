import React from 'react'
import { Link } from 'react-router-dom';

const userItem = (props) => {


    const { login, avatar_url } = props.user;
    //console.log('hey', login, avatar_url, html_url);
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ backgroundColor: 'red', width: '60px' }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )

}

export default userItem;