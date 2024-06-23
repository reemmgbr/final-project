import { createContext } from "react";
// import { jwtDecode } from "jwt-decode";

let UserProfyle = createContext();
export default function UserProfyleProvider(props) {
  // function UserProfyle() {
  //   const token = "eyJ0eXAiO.../// jwt token";
  //   const decoded = jwtDecode(token);

  //    (decoded);
  //   const decodedHeader = jwtDecode(token, { header: true });
  //    (decodedHeader);
  // }
  return (
    <UserProfyle.Provider value={{}}>{props.children}</UserProfyle.Provider>
  );
}
