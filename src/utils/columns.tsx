import Delete from '../Widgets/Button/Delete';

/** Review Table Columns */
const getReviewTableColumns = (handleDelete: (id: string) => void) => {
  const reviewTableColumns = [
    {
      title: 'Name of Reviewer',
      dataIndex: 'reviewer',
      key: 'reviewer',
    },
    {
      title: 'Name of Reviewee',
      dataIndex: 'reviewee',
      key: 'reviewee',
    },
    {
      title: 'Review',
      dataIndex: 'review',
      key: 'review',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: (__: any, record: IReviewResponse) => (
        <Delete
          onClick={() => {
            handleDelete(record.id);
          }}
        />
      ),
    },
  ];

  return reviewTableColumns;
};

export { getReviewTableColumns };
