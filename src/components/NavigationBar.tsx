import React from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router';

const NavigationBar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const history = useHistory();
  const { Sider } = Layout;

  const trigger = (
    <div onClick={() => setCollapsed(!collapsed)}>
      {collapsed ? <RightOutlined /> : <LeftOutlined />}
    </div>
  );

  const handleSelect = ({ key }: { key: string }) => {
    history.push(`/${key}`);
  };

  return (
    <Sider trigger={trigger} collapsible={true} collapsed={collapsed}>
      <Menu
        theme='dark'
        mode='inline'
        onSelect={handleSelect}
        defaultSelectedKeys={['review']}
      >
        <Menu.Item key='review' icon={<MailOutlined />}>
          Review
        </Menu.Item>
        <Menu.Item key='manage-review' icon={<AppstoreOutlined />}>
          Manage Review
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavigationBar;
