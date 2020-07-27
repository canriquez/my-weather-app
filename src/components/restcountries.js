export const restCountries = (() => {

    const getCountryName = async (cCode) => {

        console.log('retrieving my country Name for...:' + cCode);
        let url = `https://restcountries.eu/rest/v2/alpha/${cCode}`;

        try {

            const response = await fetch(url,
                { mode: 'cors' });

            const myCountryObject = await response.json();


            console.log('my Country Name response below');
            console.log(myCountryObject);
            console.log(myCountryObject.name);
            return myCountryObject.nativeName;
        } catch (err) {
            console.warn('Something went wrong with restCountries() :', err);
            return err;
        }

    };
    return {
        getCountryName,
    };
})();

export default restCountries;