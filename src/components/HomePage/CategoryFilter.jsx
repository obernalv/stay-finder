import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHotelsThunk } from "../../store/states/hotels.slice";
import useHttp from "../../hooks/useHttp";
import "./styles/CategoryFilter.css";

const CategoryFilter = () => {
  const url = "https://hotels-api.academlo.tech/cities";

  const [cities, getCities] = useHttp(url);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    getCities();
  }, []);

  const dispatch = useDispatch();

  const handleFilterCity = (id) => {
    let url;

    if (id) {
      url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`;
    } else {
      url = `https://hotels-api.academlo.tech/hotels`;
    }

    dispatch(getHotelsThunk(url));
  };

  return (
    <section className="filter-section">
      <h3 className="title-category-filter">Filter for Cities</h3>

      <ul className="list-cities">
        {/* <li onClick={() => handleFilterCity()}>All cities</li> */}

        <li className="list_items">
          <label>
            <input
              type="radio"
              name="city"
              checked={selectedCity === null}
              onChange={() => {
                setSelectedCity(null);
                handleFilterCity();
              }}
            />
            All cities
          </label>
        </li>

        {cities?.map((city) => (
          // <li onClick={() => handleFilterCity(city.id)} key={city.id}>{city.name}</li>
          <li className="list_items" key={city.id}>
            <label htmlFor={`city_${city.id}`}>
              <input
                type="radio"
                name="city"
                id={`city_${city.id}`}
                value={city.id}
                checked={selectedCity === city.id}
                onChange={() => {
                  setSelectedCity(city.id);
                  handleFilterCity(city.id);
                }}
              />
              {city.name}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryFilter;
