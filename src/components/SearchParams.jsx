import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import useBreedList from '../hook/useBreedList';
import fetchSearch from '../utils/fetchSearch';

import Results from './Results';

const ANIMALS = ['cat', 'dog', 'reptile', 'rabbit', 'bird'];

export const SearchParams = () => {
  const [Animal, setAnimal] = useState('');
  const [breeds] = useBreedList(Animal);

  const [reqParams, setReqParams] = useState({
    loaction: '',
    animal: '',
    breed: ''
  });

  const results = useQuery(['search', reqParams], fetchSearch);
  const Pets = results?.data?.pets ?? [];

  return (
    <div>
      <div className="search-params">
        <form
          onSubmit={e => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              animal: formData.get('animal') ?? '',
              breed: formData.get('breed') ?? '',
              location: formData.get('location ') ?? ''
            };
            setReqParams(obj);
          }}
        >
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              placeholder="Location"
              name="location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              name="animal"
              id="animal"
              value={Animal}
              onChange={e => {
                setAnimal(e.target.value);
              }}
            >
              <option />
              {ANIMALS.map(animal => {
                return <option value={animal}>{animal}</option>;
              })}
            </select>
          </label>
          <label htmlFor="bred">
            Breed
            <select name="breed" id="breed" disabled={breeds.length === 0}>
              <option />
              {breeds.map(breed => {
                return <option value={breed}>{breed}</option>;
              })}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Results Pets={Pets} />
    </div>
  );
};

export default SearchParams;
