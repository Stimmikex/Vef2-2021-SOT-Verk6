// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  person: null;
  id: string;
  name?: string;
  birthYear?: string;
  hairColor?: string;
  eyeColor?: string;
  height?: number;
  mass?: number;
}

export interface IPeopleResponse {
  id: string;
  name?: string;
}

export interface IAllFilms {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allFilms: any;
  films: Array<IFilm>;

}

export interface IFilm {
  characterConnection: { characters: Array<ICharacter>; };
  episodeID: number;
  title?: string;
  openingCrawl?: string;
  characters?: Array<ICharacter>;
}

export interface IPaging {
  id: string;
  name?: string;
}
