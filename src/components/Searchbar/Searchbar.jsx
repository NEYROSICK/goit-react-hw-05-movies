import { Context } from 'context/GlobalContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input } from './searchbar.styled';
import { FaEye } from 'react-icons/fa';

const Searchbar = ({ movies }) => {
  const { searchParams, setSearchParams } = useContext(Context);
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    if (!movies.length) {
      setValue(searchParams.get('query') ?? '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.search.value;
    searchQuery ? setSearchParams({ query: searchQuery }) : setSearchParams({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={value}
        name="search"
        ref={inputRef}
        placeholder="Enter a title of the movie"
      />
      <Button>
        <FaEye size={20} color={'white'} />
      </Button>
    </Form>
  );
};

export default Searchbar;
