import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const Button: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const currentOrder = searchParams.get('sortOrder');
  const nextOrder = currentOrder === 'sorted' ? 'reverse' : 'sorted';

  const handleSort = () => {
    searchParams.set('sortOrder', nextOrder);
    history.push({
      search: searchParams.toString(),
    });
  }

  return (
    <button
      className="btn btn-success"
      type="button"
      onClick={handleSort}
    >
      Sort
    </button>
  );
}
