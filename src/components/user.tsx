import { useState } from "react";

//
interface User {
  uid: string;
  name: string;
}
// App
const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Fernando Herrera",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuuario:</h3>

      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>

      {!user ? (
        <pre>
          <span>No hay usuario</span>
        </pre>
      ) : (
        <pre>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default User;
