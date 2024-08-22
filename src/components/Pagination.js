import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginationItems = () => {
    const items = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage > totalPages - 3) {
      startPage = Math.max(totalPages - 4, 1);
    }

    if (startPage > 1) {
      items.push(
        <BootstrapPagination.Item
          key={1}
          onClick={() => handleClick(1)}
          className="pagination-item"
        >
          1
        </BootstrapPagination.Item>
      );
      if (startPage > 2) {
        items.push(<BootstrapPagination.Ellipsis key="start-ellipsis" className="pagination-ellipsis" />);
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <BootstrapPagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handleClick(number)}
          className="pagination-item"
        >
          {number}
        </BootstrapPagination.Item>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<BootstrapPagination.Ellipsis key="end-ellipsis" className="pagination-ellipsis" />);
      }
      items.push(
        <BootstrapPagination.Item
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className="pagination-item"
        >
          {totalPages}
        </BootstrapPagination.Item>
      );
    }

    return items;
  };

  return (
    <BootstrapPagination className="justify-content-center">
      {getPaginationItems()}
    </BootstrapPagination>
  );
};

export default Pagination;
