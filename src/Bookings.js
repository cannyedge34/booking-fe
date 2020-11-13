import React, { useEffect } from 'react';
import axios from "axios";
import "./App.css";
import { AppContext } from "./AppContext";

export const Bookings = () => {
  const [loading, setLoading] = React.useState(true);
  const { appData, appDispatch } = React.useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/bookings');
      appDispatch({ type: "LOAD_BOOKINGS", bookings: res.data });
      setLoading(false);
    }
    return fetchData();
  }, [appDispatch, setLoading]);

  return (
    <div>
    {loading ? (
      <p>Fetching bookings</p>
    ) : (
      <ul>
        {appData.bookings.slice(0, 5).map((item) => {
          const { id, description, space_id } = item;
          return (
            <li key={id}>
              {description}
            </li>
          );
        })}
      </ul>
    )}
    </div>
  );
};