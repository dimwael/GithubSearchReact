import React from 'react'
import UserItem from './userItem.js';
import Spinner from '../layout/Spinner.js';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {


    const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
    }
    users.PropTypes = {
        user: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    }
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}


export default Users
