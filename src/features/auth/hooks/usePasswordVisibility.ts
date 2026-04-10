import { useCallback, useState } from 'react';

export function usePasswordVisibility(initialVisible = false) {
  const [visible, setVisible] = useState(initialVisible);
  const toggle = useCallback(() => {
    setVisible((v) => !v);
  }, []);
  return { visible, toggle };
}
