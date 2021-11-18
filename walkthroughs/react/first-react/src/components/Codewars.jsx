import { useState, useEffect } from "react";

const Codewars = (props) => {
  let [isLoaded, setIsLoaded] = useState(false);
  let [user, setUser] = useState(null);

  let controller = new AbortController();

  useEffect(() => {
    if (props.username) {
      fetch("https://www.codewars.com/api/v1/users/" + props.username, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setIsLoaded(true);
        })
        .catch((err) => alert(err.message));
    } else {
      if (isLoaded) setIsLoaded(false);
    }

    return function () {
      controller.abort();
    };
  }, [isLoaded, props.username]);

  if (isLoaded) {
    return (
      <div className="codewars-container">
        <h2>{user.username}</h2>
        <p className="text-special">{user.name ? `(${user.name})` : null}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Codewars;
