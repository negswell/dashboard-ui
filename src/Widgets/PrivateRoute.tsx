import React from 'react';
import _ from 'lodash';
import { Route, Redirect } from 'react-router-dom';

import UserContext from '../Logic/UserContext';

function PrivateRoute({ children, ...rest }: any) {
  const { user } = React.useContext(UserContext);

  if (user && !_.isEmpty(user)) {
    return <Route {...rest} />;
  }

  return <Redirect to='/login' />;
}

export default PrivateRoute;
