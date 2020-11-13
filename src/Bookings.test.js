import React from "react";
import { render, screen, waitForElementToBeRemoved } from "./custom-render";
import { Bookings } from "./Bookings";
import { bookings } from "./makeBookings";
import mockedAxios from 'axios';

describe("<App />", () => {
  it("Renders <Bookings /> component", async () => {
    const data = { data: bookings };
    mockedAxios.get.mockResolvedValueOnce(data);

    render(<Bookings />);
    await waitForElementToBeRemoved(() => screen.getByText(/Fetching bookings/i));

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    bookings.slice(0, 5).forEach((booking) => {
      expect(screen.getByText(booking.description)).toBeInTheDocument();
    });
  });
});