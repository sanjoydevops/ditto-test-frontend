import React, { useState } from 'react';

const BetDescription = ({ bet }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <p>
      {isReadMore ? bet?.description : bet?.excerpt}
      {bet?.excerpt?.includes?.('...') && (
        <span
          onClick={() => setIsReadMore(!isReadMore)}
          role="button"
        >
          {' '}
          Read
          {' '}
          {isReadMore ? 'Less' : 'Full'}
        </span>
      )}
    </p>
  );
};

export default BetDescription;
