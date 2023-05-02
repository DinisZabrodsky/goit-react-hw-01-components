import PropTypes from 'prop-types';
import clsx from 'clsx';
import friendsCss from './FriendList.module.css';

export function FriendListItem ({friend}) {
    return (
            <li key={friend.id} className={friendsCss.item}>
                <span className={clsx(
                    friendsCss.status, 
                    friend.isOnline ? friendsCss.online : friendsCss.offline)}>
                </span>
                <img className={friendsCss.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={friendsCss.name}>{friend.name}</p>
            </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}