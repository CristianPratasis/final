import PropTypes from 'prop-types';

const UserInfo = ({user}) => {
  return(
    <div className="UserInfo">
      <img className="Avatar"
        src={user.avatarUrl}
        alt={user.name}
      />
      <div className="UserInfo-name">
        {user.name}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
};

export default UserInfo;
