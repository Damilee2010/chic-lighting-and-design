import React, { createContext, useState, useContext, useCallback } from 'react';
import { allProducts } from '../Components/ProductData'; // Import centralized data

export const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((searchQuery) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    setTimeout(() => {
      const searchTerm = searchQuery.toLowerCase();
      
      const results = allProducts.filter(product => {
        const name = product.name?.toLowerCase() || '';
        const description = product.description?.toLowerCase() || '';
        const type = product.type?.toLowerCase() || '';
        
        return name.includes(searchTerm) || 
               description.includes(searchTerm) || 
               type.includes(searchTerm);
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  }, []);

  const handleQueryChange = useCallback((newQuery) => {
    setQuery(newQuery);
    performSearch(newQuery);
  }, [performSearch]);

  const open = useCallback(() => setOpenSearch(true), []);
  const close = useCallback(() => {
    setOpenSearch(false);
    setQuery('');
    setSearchResults([]);
    setIsSearching(false);
  }, []);
  
  const toggle = useCallback(() => setOpenSearch(s => !s), []);

  const value = {
    openSearch, 
    open, 
    close, 
    toggle, 
    query, 
    setQuery: handleQueryChange,
    searchResults,
    isSearching,
    performSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;