import { UserContext } from './UserContext';

export function UserProvider({ children }) {

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
}


