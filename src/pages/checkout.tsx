import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import AddressForm from "../components/AddressForm";
import PaymentGetaway from "../components/PaymentGetaway";
import { CheckoutContainer, StepsList } from "../styles/CheckoutStyles";
import { Box, BoxTitle } from "../styles/commomStyles";

interface IShippingAdress {
  customer: {
    firstname: string;
    lastname: string;
    email: string;
  };
  shipping: {
    name: string;
    street: string;
    town_city: string;
    county_state: string;
    postal_zip_code: string;
    country: string;
  };
}

const Checkout = () => {
  const { commerce, cart } = useShopContext();
  const [activeStep, setActiveStep] = useState(0);

  const [checkoutToken, setCheckoutToken] = useState("");
  const [shippingData, setShippingData] = useState({});
  const [postalZipCode, setPostalZipCode] = useState("");
  const [creditCardData, setCreditCardData] = useState({});
  const [lineItems, setLineItems] = useState({});

  const stepsLabels = ["Shipping address", "Payment details", "Completed"];

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const isDataExist = (data: object) => Object.keys(data).length > 0;

  useEffect(() => {
    generateToken();
  }, []);

  useEffect(() => {
    console.log(getNewOrder(lineItems));
    if (
      activeStep === 2 &&
      isDataExist(shippingData) &&
      isDataExist(creditCardData)
    ) {
      try {
        commerce.checkout
          .capture(checkoutToken, getNewOrder(lineItems) as any)
          .then((response) => console.log(response));
      } catch (error) {
        console.error(error);
      }
    }
  }, [activeStep]);

  const generateToken = async () => {
    try {
      const checkoutObj = await commerce.checkout.generateToken(
        cart?.id as string,
        { type: "cart" }
      );
      const token: string = checkoutObj.id;
      setLineItems(checkoutObj.line_items);
      setCheckoutToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const getNewOrder = (line_items: object) => {
    return {
      line_items: line_items,
      ...shippingData,
      fulfillment: {
        // The shipping method ID for "USPS Ground" (for example)
        // You can use commerce.checkout.getShippingOptions() to get a list
        shipping_method: "ship_9BAmwJVD9weXdn",
      },
      payment: {
        // Test Gateway is enabled by default, and is used when you submit orders with
        // your sandbox API key
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "01",
          expiry_year: "2023",
          cvc: "123",
          postal_zip_code: "94103",
        },
        //  card: { ...creditCardData, postal_zip_code: postalZipCode },
      },
    };
  };

  const perceedCheckout = () => {
    //  commerce.services.localeListShippingCountries(token).then((response: any) => console.log(response));
    // commerce.checkout
    // .capture(token, getNewOrder(checkoutObj.line_items) as any)
    // .then((response) => console.log(response));
  };
  const Steps = () => (
    <StepsList>
      {stepsLabels.map((elem: string, index: number) => (
        <li key={index} className={activeStep === index ? "active" : ""}>
          {elem}
        </li>
      ))}
    </StepsList>
  );
  return (
    <main>
      <Box>
        <BoxTitle>CheckOut</BoxTitle>
        <Steps />
        {activeStep === 0 ? (
          <AddressForm
            checkoutToken={checkoutToken}
            setShippingData={setShippingData}
            setPostalZipCode={setPostalZipCode}
            nextStep={nextStep}
          />
        ) : activeStep === 1 ? (
          <PaymentGetaway
            setCreditCardData={setCreditCardData}
            nextStep={nextStep}
          />
        ) : activeStep === 2 ? (
          <div>Finished order</div>
        ) : (
          <div>Error</div>
        )}
      </Box>
    </main>
  );
};

export default Checkout;
