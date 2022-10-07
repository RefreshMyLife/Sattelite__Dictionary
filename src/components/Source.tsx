import React from 'react';
import { SourceItemProps } from '../types/types';

export const Source: React.FC<SourceItemProps> = ({ license, sourceUrls }) => {
  return (
    <div className="result__sourse">
      <div className="result__sourse--license">
        <a href={license?.url} className="result__sourse--license__url">
          License name {license?.name}
        </a>
      </div>
      <div className="result__sourse--sourceUrls">
        Source{' '}
        {sourceUrls.map((url: string, i: number) => (
          <a href={url} key={i}>
            {' '}
            {url};
          </a>
        ))}
      </div>
    </div>
  );
};
