import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from './Profile/user.json';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(0 0 0 / 12%)',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        className="profile"
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
