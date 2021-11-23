import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { apiService } from "../utils/apiService";
import { routes, STUDIO_GHIBLI_URL } from "../utils/data";

const ListIndex = ({ endpoint, title }) => {
  let [initialList, setInitialList] = useState([]);
  let [list, setList] = useState([]);

  let controller = new AbortController();
  let location = useLocation();

  const fetchInitialData = async () => {
    let data = await apiService(STUDIO_GHIBLI_URL + endpoint, "GET", {
      signal: controller.signal,
    });
    if (!data) return alert("Failed to fetch " + endpoint);
    setList(data);
    setInitialList(data);
  };

  const filterList = (e) => {
    e.preventDefault();

    let filteredList = [...initialList];

    if (e.target.value) {
      filteredList = filteredList.filter((item) =>
        item[title].toLowerCase().includes(e.target.value.toLowerCase())
      );
    }

    setList(filteredList);
  };

  useEffect(() => {
    fetchInitialData();
    return () => {
      controller.abort();
    };
  }, [location.pathname]);

  if (location.pathname.endsWith(endpoint)) {
    return (
      <div className="container">
        <input
          type="search"
          name="query"
          id="query"
          onChange={filterList}
          aria-label="Filter by Name"
        />
        <hr />
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <Link to={`${item.id}`} className="link">
                {item[title]}
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
