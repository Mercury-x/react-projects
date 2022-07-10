import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchForm } = useGlobalContext();
  // useref的更新不会导致页面重新刷新
  const searchValue = React.useRef('');
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='search section'>
      <form className='search-form' onSubmit={handlerSubmit}>
        <div className='form-control'>
          <label htmlFor='search'>search your favoriate cocktail</label>
          <input
            type='text'
            name='search'
            ref={searchValue}
            onChange={() => setSearchForm(searchValue.current.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
