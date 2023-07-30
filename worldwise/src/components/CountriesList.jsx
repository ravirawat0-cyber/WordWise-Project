import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message="Add your first city by clicking on a
  city on the map"
      />
    );
  const countries = [];
  return (
    <ul className={styles.countryList}>
      {countries.map((countries) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
