/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase/firebaseConnect';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
