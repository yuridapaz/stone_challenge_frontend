import { render, screen } from "@testing-library/react";

import PaymentBottomCard from "../components/PaymentBottomCard";

describe("Payment Bottom Card", () => {
  test("should render children jsx properly", () => {
    const { debug } = render(
      <PaymentBottomCard>
        <h1>Texto</h1>
      </PaymentBottomCard>,
    );

    expect(screen.getByText("Texto")).toBeInTheDocument();
    expect(screen.queryByText("Texto Diferente")).not.toBeInTheDocument();
    debug();
  });
});
