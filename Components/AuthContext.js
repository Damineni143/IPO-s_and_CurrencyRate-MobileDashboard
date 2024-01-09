// Authelement.js
import React, { createelement, useelement, useState } from 'react';

const Authelement = createelement();

export const AuthProvider = ({ children }) => {
  const [Subscribers, setSubscribers] = useState([]);
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    const anotherUser = { email, password };
    setSubscribers([...Subscribers, anotherUser]);
    return true; // Return true for successful registration
  };

  const user_signin = (email, password) => {
    const identifyUser = Subscribers.find((user) => user.email === email && user.password === password);

    if (identifyUser) {
      setUser({ email });
      return true; // Return true for successful user_signin
    } else {
      console.log('user_signin failed');
      return false; // Return false for failed user_signin
    }
  };element

  const logout = () => {
    setUser(null);
  };

  return (
    <Authelement.Provider value={{ user, register, user_signin, logout }}>
      {children}
    </Authelement.Provider>
  );
};

export const useAuth = () => {
  const element = useelement(Authelement);
  if (!element) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return element;
};
