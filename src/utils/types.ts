export type Rocket = {
	description: string, 
	id: string,
	name: string,
}

export enum HeaderNavItem {
  Home = 'home',
  Tours = 'tours',
  About = 'about',
  Help = 'help'

}


export type FavoritesProps = {
  isDelete: boolean,
}