import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import PrivateRoute from './Widgets/PrivateRoute';
import UserContext from './Logic/UserContext';
import Login from './components/Login';
import { auth } from './utils/firebaseConfig';
import { Spin } from 'antd';
import ManageReview from './components/ManageReview';
import Review from './components/Review';

const App: React.FC = () => {
  const [user, setUser] = React.useState<IUser>(null);
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();

  React.useEffect(() => {
    const login = auth.onAuthStateChanged((loggedUser) => {
      setUser(loggedUser);
      if (loggedUser) {
        history.push('/review');
      }
    });
    setLoading(false);

    // setTimeout(() => login(), 1000);

    return () => login();
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {loading ? (
          <Spin />
        ) : (
          <>
            <PrivateRoute exact path='/review' component={Review} />
            <PrivateRoute
              exact
              path='/manage-review'
              component={ManageReview}
            />
            <Route exact path='/login' component={Login} />
          </>
        )}
      </UserContext.Provider>
    </div>
  );
};

export default App;
