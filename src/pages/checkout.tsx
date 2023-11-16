import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import AddressForm from "../components/AddressForm";
import PaymentGetaway from "../components/PaymentGetaway";
import { CheckoutContainer, StepsList } from "../styles/CheckoutStyles";

const Checkout = () => {
  const { commerce, cart } = useShopContext();

  const [checkoutToken, setCheckoutToken] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [payment, setPayment] = useState({});

  const stepsLabels = ['Shipping address', 'Payment details', 'Completed']

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (Object.keys(shippingData).length > 0) {
      setActiveStep(1);
    }

    const generateToken = async () => {
      console.log(cart);
      try {
        const checkoutObj = await commerce.checkout.generateToken(
          cart?.id as string,
          { type: "cart" }
        );
        const token: string = checkoutObj.id;
        console.log(token);
        setCheckoutToken(token);
        //  commerce.services.localeListShippingCountries(token).then((response: any) => console.log(response));

        commerce.checkout
          .capture(token, getNewOrder(checkoutObj.line_items) as any)
          .then((response) => console.log(response));
      } catch (error) {
        console.error(error);
      }
    };
    // generateToken();

    // fetchShippingCountries(checkoutToken)
  }, [shippingData]);

  const fetchShippingCountries = async (checkoutTokenId: any) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log({ countries });
  };

  const getNewOrder = (line_items: object) => {
    return {
      line_items: line_items,
      customer: {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
      },
      shipping: {
        name: "John Doe",
        street: "123 Fake St",
        town_city: "San Francisco",
        county_state: "CA",
        postal_zip_code: "94103",
        country: "US",
      },
      fulfillment: {
        // The shipping method ID for "USPS Ground" (for example)
        // You can use commerce.checkout.getShippingOptions() to get a list
        shipping_method: "ship_1ypbroE658n4ea",
      },
      payment: {
        gateway: "paypal",
        paypal: {
          action: "authorize",
        },
      },
      // payment: {
      //   // Test Gateway is enabled by default, and is used when you submit orders with
      //   // your sandbox API key
      //   gateway: "test_gateway",
      //   card: {
      //     number: "4242 4242 4242 4242",
      //     expiry_month: "01",
      //     expiry_year: "2023",
      //     cvc: "123",
      //     postal_zip_code: "94103",
      //   },
      // },
    };
  };

  const Steps = () =>  (
      <StepsList>
        {
          stepsLabels.map( (elem: string, index: number) => (
            <li key={index} className={activeStep===index ? 'active' : ''}>{elem}</li>
          ))
        }
      </StepsList>
    )
  ;
  return (
    <main>
      <section>
        <CheckoutContainer>
          <h2>CheckOut</h2>
          <Steps />
          {activeStep === 0 ? (
            <AddressForm token={"token"} setShippingData={setShippingData} />
          ) : (
            <PaymentGetaway setPayment={setPayment} />
          )}
        </CheckoutContainer>
      </section>
    </main>
  );
};

export default Checkout;
