import React from 'react';
import { Source } from '../components/Source';
import { DefinitionsItem, MeaningsItem, PhoneticsItem, WordItem } from '../types/types';

export const Result: React.FC<WordItem> = ({
  word,
  phonetic,
  phonetics,
  license,
  meanings,
  sourceUrls,
}) => {
  return (
    <div className="result">
      <div className="result__top--content">
        {' '}
        <h3 className="result__nameOfWord">{word}</h3>
        {phonetic && <span className="result__phonetic">Phonetic: {phonetic}</span>}
      </div>

      <div className="result__phonetics">
        {phonetics?.map((phonetic: PhoneticsItem, i: number) => (
          <div key={i} className="result__phonetics--block">
            <>
              {' '}
              <div className="result__phonetics--main">
                <span className="result__phonetics--text">
                  {phonetic?.text || 'Not found transcription'}
                </span>{' '}
                <br />
                <audio className="result__phonetics--audio" controls src={phonetic?.audio}>
                  <a href={phonetic?.audio}>Download audio</a>
                </audio>
              </div>
              <div className="result__phonetics--info">
                <div className="result__phonetics--license">
                  <span className="result__phonetics--license__name">
                    {' '}
                    {phonetic?.license?.name || 'Not found license name'}{' '}
                  </span>
                  <br />
                  <a href={phonetic?.license?.url} className="result__phonetics--license__url">
                    {phonetic?.license?.url || 'Not found license url'}
                  </a>
                </div>
                <a className="result__phonetics--sourseUrl" href={phonetic?.sourceUrl}>
                  {' '}
                  {phonetic?.sourceUrl || 'Not found sourse url'}{' '}
                </a>
              </div>
            </>
          </div>
        ))}
      </div>
      <div className="result__meanings--container">
        {meanings?.map((meaning: MeaningsItem, i: number) => (
          <div key={i} className="result__meanings">
            <span className="result__meanings--partOfSpeech">
              <i> {meaning.partOfSpeech}</i>
            </span>
            <div className="result__meanings--block">
              <ul className="result__meanings--inner">
                {meaning.definitions.map((definition: DefinitionsItem, i: number) => (
                  <div key={i} className="result__meanings--definitions">
                    Definiotion
                    <p className="result__meanings--definition">{definition?.definition}</p>
                    {definition.example && (
                      <span> {definition?.example.length > 0 ? 'Example: ' : ''} </span>
                    )}
                    {definition.example && (
                      <div>
                        {' '}
                        <li className="result__meanings--example">{definition?.example}</li>
                      </div>
                    )}
                    <div className="result__meanings--definition__synonyms">
                      {definition?.synonyms?.length && definition.synonyms.length > 0 ? (
                        <span> Synonyms: </span>
                      ) : (
                        ''
                      )}
                      {definition.synonyms?.map((synonym: string, i: number) => (
                        <span key={i}>
                          {synonym}
                          {'; '}
                        </span>
                      ))}
                    </div>
                    <div className="result__meanings--definition__antonyms">
                      {definition?.antonyms?.length && definition.antonyms.length > 0 ? (
                        <span> Antonyms: </span>
                      ) : (
                        ''
                      )}
                      {definition.antonyms?.map((antonym: string, i: number) => (
                        <span key={i}>
                          {antonym}
                          {'; '}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </ul>
              <div className="result__meanings--antonyms">
                {meaning?.antonyms?.length && meaning.antonyms.length > 0 ? (
                  <span>All Antonyms: </span>
                ) : (
                  ''
                )}
                {meaning.antonyms?.map((antonym: string, i: number) => (
                  <span key={i} className="result__meanings--antonym">
                    {antonym}
                    {'; '}
                  </span>
                ))}
              </div>
              <div className="result__meanings--synonyms">
                {meaning?.synonyms?.length && meaning.synonyms.length > 0 ? (
                  <span>All Synonyms: </span>
                ) : (
                  ''
                )}
                {meaning.synonyms?.map((synonym: string, i: number) => (
                  <span key={i} className="result__meanings--antonym">
                    {synonym}
                    {'; '}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <Source license={license} sourceUrls={sourceUrls ?? []} />
      </div>
    </div>
  );
};

export default Result;
