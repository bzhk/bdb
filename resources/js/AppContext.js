import { createContext } from 'react';

const AppContext = createContext(
    {
      nextPath: () => {},
      routes: [],
    }
  );

  export default AppContext;