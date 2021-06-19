import React, { useContext } from 'react';
import { Button, Layout, Space, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

import UserContext from '../Logic/UserContext';
import NavigationBar from './NavigationBar';
import { auth } from '../utils/firebaseConfig';

const Dashboard: React.FC = ({ children }) => {
  const { user } = useContext(UserContext);
  const { Content, Header } = Layout;
  const history = useHistory();

  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1>Dashboard</h1>
        <Space size='large'>
          <h4>Welcome {user?.displayName}</h4>
          <Button
            type='text'
            onClick={() => {
              auth.signOut();
              history.push('/login');
            }}
          >
            <Tooltip title={'sign out'}>
              <LogoutOutlined style={{ fontSize: 16 }} />
            </Tooltip>
          </Button>
        </Space>
      </Header>
      <Layout>
        <NavigationBar />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
