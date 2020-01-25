import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    static propTypes = {
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            company,
            login,
            html_url,
            followers,
            following,
            hireable
        } = this.props.user;
        console.log(hireable, this.props.user.hireable);
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    Back to homepage
                </Link>
                Hireabale: {' '}
                {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}

                <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} className='round-img' alt="" style={{ backgroundColor: 'white', width: '150px' }} />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>{login}</strong>
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>{company}</strong>
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: {blog}</strong>
                                </Fragment>}
                            </li>
                            <li>
                                {followers && <Fragment>
                                    <strong>followers: {followers}</strong>
                                </Fragment>}
                            </li>
                            <li>
                                {following && <Fragment>
                                    <strong>following: {following}</strong>
                                </Fragment>}
                            </li>


                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default User
