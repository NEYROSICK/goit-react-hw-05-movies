import { useSearchParams } from 'react-router-dom';

const { createContext, useState } = require('react');

export const Context = createContext();

export default function GlobalContext({ children }) {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Context.Provider
      value={{ query, setQuery, searchParams, setSearchParams }}
    >
      {children}
    </Context.Provider>
  );
}
