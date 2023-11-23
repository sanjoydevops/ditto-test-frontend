import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useQueryParam = (name, defaultValue = null) => {
  const location = useLocation();
  const urlSearchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const value = urlSearchParams.get(name);
  if (value === null) return defaultValue;
  return value;
}

export default useQueryParam;
