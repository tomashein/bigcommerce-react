import { useCallback } from 'react';
import classNames from 'classnames';
import ChevronLeftIcon from '@assets/icons/chevron-left.svg';
import ChevronRightIcon from '@assets/icons/chevron-right.svg';
import { Query } from '@types';
import styles from './pagination.module.css';

const Pagination = ({ current, total, setPage }: Props) => {
  const pages = Array.from(Array(total), (_, x) => x + 1);

  const handlePrevClick = useCallback(() => {
    setPage((prev) => ({ ...prev, page: current - 1 }));
  }, [current, setPage]);

  const handleNextClick = useCallback(() => {
    setPage((prev) => ({ ...prev, page: current + 1 }));
  }, [current, setPage]);

  const handlePageClick = (page: number) => () => {
    setPage((prev) => ({ ...prev, page }));
  };

  const pageNumbers = pages.map((page) => {
    if (page <= 4 && page > 0) {
      const buttonClass = classNames(styles.button, current === page && styles.button_active);
      return (
        <button
          className={buttonClass}
          disabled={current === page}
          key={page}
          onClick={handlePageClick(page)}
          type="button"
        >
          {page}
        </button>
      );
    }
    return null;
  });

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={handlePrevClick}
        disabled={current === pages[0]}
        type="button"
      >
        <ChevronLeftIcon />
      </button>
      {pageNumbers}
      <button
        className={styles.button}
        onClick={handleNextClick}
        disabled={current === pages[pages.length - 1]}
        type="button"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Pagination;

type Props = {
  current: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<Query>>;
};
