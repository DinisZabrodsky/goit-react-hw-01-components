import PropTypes from 'prop-types';
import clsx from 'clsx'
import cssModule from "./Profile.module.css";


export function Profile ({username, tag, location, avatar, followers, views, likes}) {
    return <div className={clsx(cssModule.profile)}>
        <div className={clsx(cssModule.description)}>
            <img
                src={avatar}
                alt="User avatar"
                className={clsx(cssModule.avatar)}
            />
            <p className={clsx(cssModule.name)} >{username}</p>
            <p className={clsx(cssModule.tag)} >@{tag}</p>
            <p className={clsx(cssModule.location)} >{location}</p>
        </div>

        <ul className={clsx(cssModule.stats)}>
            <li>
                <span className={clsx(cssModule.label)}>Followers</span>
                <span className={clsx(cssModule.quantity)}>{followers}</span>
            </li>
            <li>
                <span className={clsx(cssModule.label)}>Views</span>
                <span className={clsx(cssModule.quantity)}>{views}</span>
            </li>
            <li>
                <span className={clsx(cssModule.label)}>Likes</span>
                <span className={clsx(cssModule.quantity)}>{likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    avatar:  PropTypes.string,
    tag:  PropTypes.string,
    username: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}