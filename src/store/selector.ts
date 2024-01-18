import { selector } from 'recoil';
import { favourites } from './atoms.js';

export const favouritesPageState = selector({
  key: 'addToFavourites',
    get: ({ get }) => {
      const currentFavourites = get(favourites);

      return currentFavourites;
    },
});
  