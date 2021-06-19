import React from 'react';
import { PageHeader, Table, Modal } from 'antd';

import Dashboard from './Dashboard';
import { getReviewTableColumns } from '../utils/columns';
import getReviews from '../utils/getReviews';
import { formatReviews } from '../utils/formatters';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const ManageReview: React.FC = () => {
  const [reviews, setReviews] = React.useState<IReviewResponse[]>([]);

  React.useEffect(() => {
    getReviews().then((reviewList: any) =>
      setReviews(formatReviews(reviewList))
    );
  }, []);

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: 'Do you Want to delete this review ?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        console.log(id);
      },
    });
  };

  const columns = React.useMemo(
    () => getReviewTableColumns(handleDelete),
    [reviews]
  );

  return (
    <Dashboard>
      <PageHeader title='Manage Reviews' />
      <div style={{ padding: '16px' }}>
        <Table columns={columns} dataSource={reviews} />
      </div>
    </Dashboard>
  );
};

export default ManageReview;
