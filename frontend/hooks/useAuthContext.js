import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  if (typeof window === 'undefined') {
    // Server-side rendering, return a placeholder context or handle it accordingly
    return { /* handle server-side behavior */ };
  }

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used in an AuthContextProvider');
  }

  return context;
};
