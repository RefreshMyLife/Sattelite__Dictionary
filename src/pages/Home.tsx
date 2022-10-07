import qs from 'qs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchWord } from '../redux/search/asincActions';
import { selectSearch, setSearchValue } from '../redux/search/slice';
import { SearchWordArgs, WordItem } from '../types/types';
import { useAppDispatch } from '../redux/store';
import NotFound from './NotFound';
import Result from './Result';
import { Loading } from './../components/Loading';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);
  const { searchValue, status, words } = useSelector(selectSearch);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as SearchWordArgs;
      console.log(params);
      dispatch(setSearchValue(params?.searchValue));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      const params = { searchValue };

      const queryString = qs.stringify(params, { skipNulls: true });

      navigate(`?${queryString}`);
    }
    if (window.location.search) {
      dispatch(fetchWord(searchValue));
    }
    isMounted.current = true;
  }, [searchValue]);

  useEffect(() => {
    if (!isSearch.current) {
      setFetchWords();
    }
    isSearch.current = false;
  }, [searchValue]);
  const setFetchWords = async () => {
    const search = searchValue ? `${searchValue}` : '';
    if (search.length !== 0) {
      dispatch(fetchWord(search));
    }
  };
  const result = words.map((word: WordItem, i: number) => <Result key={i} {...word} />);
  console.log(words, 'owrd');
  return (
    <div className="container">
      {status === 'error' ? <NotFound /> : status === 'loading' ? <Loading /> : result}
    </div>
  );
};

export default Home;
