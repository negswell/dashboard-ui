import React from 'react';
import { PageHeader, Form, Button, Input, Select } from 'antd';

import { layout, tailLayout } from '../utils/constants';
import Dashboard from './Dashboard';
import getPeers from '../utils/getPeers';
import { formatPeers } from '../utils/formatters';

const Review: React.FC = () => {
  const [peers, setPeers] = React.useState<ISelectPeers[]>([]);

  React.useEffect(() => {
    getPeers().then((peersList: any) => {
      setPeers(formatPeers(peersList));
    });
  }, []);

  const handleFinish = (values: IPeerFormValues) => {
    console.log(values);
  };

  return (
    <Dashboard>
      <PageHeader title='Review Peers' />
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={handleFinish}
      >
        <Form.Item
          label='Peer'
          name='uid'
          rules={[
            { required: true, message: 'Please select a user to review' },
          ]}
        >
          <Select placeholder='Choose one ... ' options={peers} showSearch />
        </Form.Item>

        <Form.Item
          label='Review'
          name='review'
          rules={[{ required: true, message: 'Please enter a review' }]}
        >
          <Input.TextArea rows={6} allowClear showCount />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Dashboard>
  );
};

export default Review;
