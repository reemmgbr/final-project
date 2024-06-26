import { createContext, useEffect, useState } from "react";

export let TokenContext = createContext();
export default function TokenContextProvider(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("TokenLokal"));
  }, []);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {props.children}
    </TokenContext.Provider>
  );
}
