import * as auth from './Authentication';

const handleLogout = (e) => {
  auth.logout();
}

export default handleLogout;
