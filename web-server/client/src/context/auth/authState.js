import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import authReducer from './authReducer';

const initialState = {
  auth: null,
  error: null,
};

export const AuthContext = createContext(initialState);
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // actions
  const fetchUser = async () => {
    let payload;

    const jwt = localStorage.getItem('jwt');
    if (!jwt) payload = false;
    else {
      try {
        const response = await axios.get('/user-service/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        });
        const user = response.data.data.data;
        payload = user;
      } catch (err) {
        payload = false;
      }
    }

    dispatch({ type: 'FETCH_USER', payload });
  };

  const login = async (data) => {
    let payload;

    const response = await axios.post('/user-service/login', data);
    const { user, jwt } = response.data.data.data;

    if (user && jwt) {
      payload = user;
      localStorage.setItem('jwt', jwt);
    }

    dispatch({ type: 'LOGIN', payload });
  };

  const signup = async (data) => {
    let payload;

    const response = await axios.post('/user-service/signup', data);
    const { user, jwt } = response.data.data.data;

    if (user && jwt) {
      payload = user;
      localStorage.setItem('jwt', jwt);
    }

    dispatch({ type: 'SIGNUP', payload });
  };

  const logout = async () => {
    localStorage.removeItem('jwt');
    dispatch({ type: 'LOGOUT', payload: false });
  };

  const setError = (data) => {
    dispatch({ type: 'AUTH_ERROR', payload: data });
  };

  return (
    <Provider
      value={{
        auth: state.auth,
        error: state.error,
        fetchUser,
        login,
        signup,
        logout,
        setError,
      }}
    >
      {children}
    </Provider>
  );
};
