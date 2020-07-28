export const RestCountries = (() => {
  const getCountryName = async (cCode) => {
    const url = `https://restcountries.eu/rest/v2/alpha/${cCode}`;

    try {
      const response = await fetch(url,
        { mode: 'cors' });
      const myCountryObject = await response.json();
      return myCountryObject.nativeName;
    } catch (err) {
      throw ('Something went wrong with restCountries() :', err);
    }
  };
  return {
    getCountryName,
  };
})();

export default RestCountries;