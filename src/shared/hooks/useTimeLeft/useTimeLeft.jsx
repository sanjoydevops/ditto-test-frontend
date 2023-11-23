import { useCallback, useEffect, useState } from 'react';

const useTimeLeft = (defaultTimeLeft) => {
  const [timeLeft, setTimeLeft] = useState(defaultTimeLeft);
  const resetTimeLeft = useCallback(() => setTimeLeft(defaultTimeLeft), [defaultTimeLeft]);
  const showTimeLeft = useCallback(() => (
    <span style={{ fontSize: '14px' }}>
      <span style={{ color: '#00db51' }}>
        Time left &nbsp;
      </span>
      <span style={{ color: '#ffffff' }}>
        {String(timeLeft).padStart(2, '0')} of {defaultTimeLeft}
      </span>
    </span>
  ), [defaultTimeLeft, timeLeft]);
  useEffect(() => {
    const timeout = setTimeout(() => setTimeLeft(value => value - 1), 1000);
    if (timeLeft <= 0) clearTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [timeLeft]);
  return [timeLeft, resetTimeLeft, showTimeLeft, setTimeLeft];
};

export default useTimeLeft;
