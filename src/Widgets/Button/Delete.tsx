import React from 'react';
import { Button, Tooltip } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

/** Delete Props */
interface IProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/** Delete */
const Delete = (props: IProps) => {
  const { title, onClick } = props;

  return (
    <Tooltip title={title}>
      <Button shape='circle' onClick={onClick}>
        <DeleteFilled className='icon' style={{ color: 'red' }} />
      </Button>
    </Tooltip>
  );
};

Delete.defaultProps = {
  title: 'Delete',
};

export default Delete;