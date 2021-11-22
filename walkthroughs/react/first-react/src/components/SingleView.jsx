import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL, routes } from "../utils/data";

const SingleView = (props) => {
  let [item, setItem] = useState({});

  let navigate = useNavigate();
  let location = useLocation();
  let { id } = useParams();
  let endpoint = location.pathname.split("/")[1];

  const fetchFilm = async () => {
    let data = await apiService(`${STUDIO_GHIBLI_URL}${endpoint}/${id}`);
    if (!data) navigate("not_found", { replace: true, state: id });
    setItem(data);
  };

  useEffect(() => {
    fetchFilm();
  }, [location.pathname]);

  return (
    <div className="card">
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1>{item[routes[endpoint].title]}</h1>
      <ul>
        {routes[endpoint].properties.map((prop, idx) => (
          <li key={prop + idx}>{item[prop]}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleView;
