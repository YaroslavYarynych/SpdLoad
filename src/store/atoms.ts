import { atom } from 'recoil';
import { Rocket } from '../utils/types.js';

export const favourites = atom<Rocket[]>({
    key: 'favourites',
    default: [],
  });

export const dataFromServer = atom<Rocket[]>({
  key: 'data',
  default: [],
});

export const IsLoaded = atom<boolean>({
  key: 'loader',
  default: false,
})