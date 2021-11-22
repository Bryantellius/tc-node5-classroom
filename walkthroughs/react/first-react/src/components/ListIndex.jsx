import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL } from "../utils/data";

const ListIndex = (props) => {
  let [list, setList] = useState([]);

  let controller = new AbortController();
  let location = useLocation();

  const fetchInitialData = async () => {
    let data = await apiService(STUDIO_GHIBLI_URL + props.endpoint, "GET", {
      signal: controller.signal,
    });
    if (!data) return alert("Failed to fetch " + props.endpoint);
    setList(data);
  };

  useEffect(() => {
    fetchInitialData();
    return () => {
      controller.abort();
    };
  }, [location.pathname]);

  if (location.pathname.endsWith(props.endpoint)) {
    return (
      <div className="container">
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <Link to={`${item.id}`} className="link">
                {item[props.title]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <Outlet />;
  }
};

export default ListIndex;
