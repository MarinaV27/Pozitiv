import css from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img className={css.image} src={avatar} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.usertag}>@{tag}</p>
        <p className={css.userlocation}> {location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.statistic}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.statistic}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.statistic}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
