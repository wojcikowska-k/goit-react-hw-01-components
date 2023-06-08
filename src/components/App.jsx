import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(0 0 0 / 12%)',
      }}
    >
      {/* React homework template */}

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        className="profile"
      />
    </div>
  );
};
