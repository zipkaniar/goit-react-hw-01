import PropTypes from 'prop-types';
import styles from './Profiledesing.css';

const Profile =({username,tag,location,avatar,stats}) => {
  return (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt="user-avatar"/>
      <p className={styles.username}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.status}>
        <span className={styles.followers}>Followers</span>
        <span className={styles.follower}>{stats.followers}</span>
      </li>
      <li className={styles.status}>
        <span className={styles.views}>Views</span>
        <span className={styles.view}>{stats.views}</span>
      </li>
      <li className={styles.status}>
        <span className={styles.likes}>Likes</span>
        <span className={styles.like}>{stats.likes}</span>
      </li>
    </ul>
</div>

  );
  };
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };

  export default Profile;