import { useState } from "react";

//
interface UserInterface {
  uid: string;
  name: string;
}
// App
const User = () => {
  const [user, setUser] = useState<UserInterface>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Fernando Herrera",
    });
  };

  return (
    <div className="mt-3">
      <h3>Usuario:</h3>

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
