import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";

const Checkout = () => {
  const { commerce, cart } = useShopContext();

  const [checkoutToken, setCheckoutToken] = useState<String | null>(null);

  const getNewOrder = (line_items: Object) => {
    return {
      line_items: line_items,
      customer: {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@example.com',
          },
          shipping: {
            name: 'John Doe',
            street: '123 Fake St',
            town_city: 'San Francisco',
            county_state: 'CA',
            postal_zip_code: '94103',
            country: 'US',
          },
          fulfillment: {
            // The shipping method ID for "USPS Ground" (for example)
            // You can use commerce.checkout.getShippingOptions() to get a list
            shipping_method: 'ship_1ypbroE658n4ea',
          },
          payment: {
            // Test Gateway is enabled by default, and is used when you submit orders with
            // your sandbox API key
            gateway: 'test_gateway',
            card: {
              number: '4242 4242 4242 4242',
              expiry_month: '01',
              expiry_year: '2023',
              cvc: '123',
              postal_zip_code: '94103',
            },
          },
    };
  };
  useEffect(() => {
    const generateToken = async () => {
      console.log(cart);
      try {
        const checkoutObj = await commerce.checkout.generateToken(
          cart?.id as string,
          { type: "cart" }
        );
        const token: string = checkoutObj.id;
        console.log(token);
        console.log(checkoutObj.line_items)
        // setCheckoutToken(token);
        commerce.checkout
          .capture(token, getNewOrder(checkoutObj.line_items))
          .then((response) => console.log(response));
      } catch (error) {}
    };
    generateToken();
  }, []);

  return (
    <main>
      <section>
        <h2>CheckOut</h2>
      </section>
    </main>
  );
};

export default Checkout;
