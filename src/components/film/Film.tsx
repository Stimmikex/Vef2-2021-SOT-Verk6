import Link from 'next/link';
import { ICharacter, IFilm } from '../../types';

import s from './Film.module.scss';

type Props = {
  film: IFilm;
};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {`Episode ${film.episodeID}: ${film.title}`}
      </h2>
      <div className={s.film__summary}>
        <pre className={s.film__openingCrawl}>{film.openingCrawl}</pre>
        <div className={s.film__characters}>
          <h2>Characters</h2>
          <ul className={s.film__characterList}>
            {
              film.characterConnection.characters.map((character:ICharacter) => (
                <li key={character.id} className={s.film__characterListItem}>
                  <Link href={`/characters/${character.id}`}>{character.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}
