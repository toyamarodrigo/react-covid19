import axios from 'axios';

const rootUrl = 'https://api.covid19api.com/summary';

export const fetchData = async (country) => {
  try {
    if (country) {
      const fetchedCountry = country;
      const {
        data: { Countries, Date: lastUpdate },
      } = await axios.get(rootUrl);

      const modifiedData = Countries.filter((country) => {
        return country.Country === fetchedCountry;
      });

      modifiedData.push({ lastUpdate });

      const objModifiedData = modifiedData.reduce((current, next) => {
        return { ...current, ...next };
      }, {});

      return objModifiedData;
    } else {
      const {
        data: {
          Global: {
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
          },
          Date: lastUpdate,
        },
      } = await axios.get(rootUrl);
      const modifiedData = {
        NewConfirmed,
        NewDeaths,
        NewRecovered,
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
        lastUpdate,
      };
      console.log('global' + modifiedData);
      return modifiedData;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { Countries },
    } = await axios.get(rootUrl);

    return Countries.map((country) => country.Country);
  } catch (error) {
    console.log(error);
  }
};
