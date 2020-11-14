import React, { useEffect, useCallback } from 'react';
import axios from "axios";
import "./App.css";
import { AppContext } from "./AppContext";
import Slider from './Slider';

export const Bookings = () => {
  const [loading, setLoading] = React.useState(true);
  const { appData, appDispatch } = React.useContext(AppContext);

  function fetchFilteredBookings(range) {
    let newRoomIds = [];
    for (let i = range[0]; i <= range[1]; i++) {
      newRoomIds.push(i);
    }
    let params = { rooms_number: newRoomIds }
    fetchData(params);
  }

  const fetchData = useCallback(async (params) => {
    const res = await axios.get('/bookings', { params });
    appDispatch({ type: "LOAD_BOOKINGS", bookings: res.data });
    setLoading(false);
 }, [appDispatch]);

  useEffect(() => { fetchData() }, [fetchData]);

  return (
    <div>
    <div className="slider">
      <Slider min={0} max={5} updateFilter={fetchFilteredBookings}  />
    </div>
    <div className="content">
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
    </div>
  );
};
