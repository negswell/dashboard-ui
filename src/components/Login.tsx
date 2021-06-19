import React from 'react';
import { Button, message } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import firebase, { auth } from '../utils/firebaseConfig';
import UserContext from '../Logic/UserContext';

/** Login  Component */
const Login: React.FC = () => {
  const history = useHistory();
  const { setUser } = React.useContext(UserContext);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          history.push('/review');
        })
        .catch((e) => message.error(e.message));
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Button icon={<GoogleOutlined />} onClick={() => signInWithGoogle()}>
        Login using Google
      </Button>
    </div>
  );
};

export default Login;
