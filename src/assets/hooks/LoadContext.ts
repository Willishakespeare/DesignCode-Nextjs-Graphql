import React from 'react';

interface IContextProps {
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadContext = React.createContext({} as IContextProps);

export default LoadContext;
