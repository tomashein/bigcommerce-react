import { ChangeEvent, useState } from 'react';
import MagnifyingGlass from '@assets/icons/magnifying-glass.svg';
import XMark from '@assets/icons/x-mark.svg';
import { Query } from '@types';
import styles from './filter.module.css';

const Filter = ({ setFilter }: Props) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    setFilter((prev) => {
      const state = { ...prev, page: 1 };
      if (state.keyword) {
        delete state.keyword;
      }
      return state;
    });
  };

  const handleClick = () => {
    if (value && value !== '') {
      setFilter((prev) => ({ ...prev, page: 1, keyword: value }));
    }
  };

  return (
    <div className={styles.filter}>
      <input
        className={styles.input}
        onChange={handleChange}
        placeholder="Search..."
        value={value}
      />
      {value !== '' && (
        <button onClick={handleClear} type="button">
          <XMark />
        </button>
      )}
      <button className={styles.search} disabled={value === ''} onClick={handleClick} type="button">
        <MagnifyingGlass />
      </button>
    </div>
  );
};

export default Filter;

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<Query>>;
};
