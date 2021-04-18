import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter } from '../../types';

export function Characters(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const [characters, setCharacters] = useState<Array<ICharacter>>([]);

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState<string | null>(null);

  let startCursor: React.SetStateAction<string | null>;

  const apiUrl = `api/characters?after=${nextPage}`;

  const fetchMore = async (): Promise<void> => {
    setLoading(true);
    let json;
    if (!hasNextPage) setNextPage(startCursor);

    try {
      const result = await fetch(apiUrl);
      if (!result.ok) {
        throw new Error('there are no results');
      }
      json = await result.json();
    } catch (e) {
      return;
    } finally {
      setLoading(false);
    }
    setCharacters(characters.concat(json.allPeople.people));
    if (!startCursor) startCursor = json.allPeople.pageInfo.startCursor;
    setNextPage(json.allPeople.pageInfo.endCursor);
    if (hasNextPage) setHasNextPage(json.allPeople.pageInfo.endCursor.hasNextPage);
  };

  useEffect(() => {
    fetchMore();
  }, []);
  if (loading) {
    return <p>Fetching Data...</p>;
  }

  return (
    <section className={s.characters}>
      <ul className={s.characters__list}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>

      <Button disabled={loading} onClick={fetchMore}>Fetch more</Button>
    </section>
  );
}
