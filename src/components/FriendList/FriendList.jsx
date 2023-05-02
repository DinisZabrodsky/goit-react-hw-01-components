import PropTypes from 'prop-types';
import friendsCss from './FriendList.module.css';
import {FriendListItem} from './FriendListItem';

export function FriendList ({friends}) {
    console.log (friends)
    return (
        <ul className={friendsCss['friend-list']}>

            {friends.map(friend => (
                <FriendListItem 
                friend={friend}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    props: PropTypes.array
}