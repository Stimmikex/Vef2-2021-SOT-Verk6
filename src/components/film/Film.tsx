import Link from 'next/link';

import s from './Film.module.scss';

type Props = {

};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {`Episode ${film.episodeID}: ${film.title}`}
      </h2>
      <div>
        <div>{film.openingCrawl}</div>
        <div>
          <h2>Characters</h2>
          <ul>
            {
              film.characterConnection.characters.map((character) => (
                <li key={character.id}>
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
