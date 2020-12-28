import React from 'react'; 
import { Input } from 'antd';

const SearchBar = ({ setShows, setSearching }) => {
    const { Search } = Input;
    const getShows = (value = '') => {
        setSearching(true);
        fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
            .then(data => data.json())
            .then(response => setShows(response))
            .catch(error => console.error(error))
            .finally(() => setSearching(false));
    };

    return <Search placeholder="Search a show's name" onSearch={getShows} enterButton />;
};

export default SearchBar;