import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import fetchBreedsList from '../utils/fetchBreedsList';

const localCache = {};

const useBreedList = animal => {
  const results = useQuery(['breeds', animal], fetchBreedsList);

  return [results?.data?.breeds ?? [], results.status];
};
export default useBreedList;
