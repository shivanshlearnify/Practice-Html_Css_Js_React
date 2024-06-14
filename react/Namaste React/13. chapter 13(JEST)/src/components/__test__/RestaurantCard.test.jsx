import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

import "@testing-library/jest-dom";

it("should Render restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const nameOfRes = screen.getByText("Chinese Wok");

  // ASSERTION
  expect(nameOfRes).toBeInTheDocument();
});
