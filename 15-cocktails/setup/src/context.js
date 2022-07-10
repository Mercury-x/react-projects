import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchForm, setSearchForm] = useState('');
  const [cocktails, setCockTails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const responce = await fetch(`${url}${searchForm}`);
      const data = await responce.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCockTails(newCocktails);
        setLoading(false);
      } else {
        setCockTails([]);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [searchForm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchForm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchForm,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
