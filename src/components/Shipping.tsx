import React, { useState, useEffect, FormEvent } from "react";
import { useShopContext } from "../context/ShopContext";
import {
  ShippingForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledSelect,
  ShippingContainer,
  SubmitWrapper
} from "../styles/ShippingStyles";
import { CheckOutButton } from "../styles/CartStyles";

interface IAdressFormProps {
  checkoutToken: string;
  setShippingData: (obj: object) => void;
  nextStep: () => void;
  setPostalZipCode: (zipCode: string) => void;
}

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

const Shipping = (props: IAdressFormProps) => {
  const { commerce, cart } = useShopContext();
  const { checkoutToken, setShippingData, nextStep, setPostalZipCode } = props;

  const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingCountry, setShippingCountry] = useState("AT");
  const [shippingSubdivision, setShippingSubdivision] = useState("");

  useEffect(() => {
    // commerce.services
    // .localeListShippingCountries(token)
    // .then((response: any) => console.log(response));
    if (checkoutToken.length > 0) {
      fetchShippingCountries(checkoutToken);
    }
  }, [checkoutToken]);

  useEffect(() => {
    console.log("Subdivisions");
    if (checkoutToken.length > 0 && shippingCountry.length > 0) {
      console.log("setSubdivisions");
      fetchSubdivisions(shippingCountry);
    }
  }, [shippingCountry]);

  useEffect(() => {
    if (checkoutToken.length > 0) {
      getShippingOptions(checkoutToken);
    }
  }, [shippingSubdivision]);

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(data.entries());
    setShippingData({
      customer: {
        firstname: formObject.firstname,
        lastname: formObject.lastname,
        email: formObject.email,
      },
      shipping: {
        name: formObject.fullname,
        street: formObject.street,
        town_city: formObject.city,
        county_state: formObject.countrystate,
        postal_zip_code: formObject.postalzipcode,
        country: formObject.country,
      },
    } as IShippingAdress);
    setPostalZipCode(formObject.postalzipcode as string);
    nextStep();
    // console.log(formObject.city);
  };

  const fetchShippingCountries = async (checkoutTokenId: string) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
  };

  const fetchSubdivisions = async (checkoutTokenId: string) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      checkoutTokenId
    );
    setShippingSubdivisions(subdivisions);
  };

  const getShippingOptions = async (checkoutTokenId: string) => {
    const shippingOptions = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {
        country: shippingCountry,
        region: shippingSubdivision,
      }
    );

    console.log(shippingOptions);
  };

  return (
    <ShippingForm onSubmit={formSubmit}>
      <ShippingContainer>
        <h4>Customer Details:</h4>
        <div>
          <StyledLabel htmlFor="firstname">First Name:</StyledLabel>
          <StyledInput type="text" id="fisrt-name" name="firstname" required />
        </div>
        <div>
          <StyledLabel htmlFor="lastname">Last Name:</StyledLabel>
          <StyledInput type="text" id="last-name" name="lastname" required />
        </div>
        <div>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput type="email" id="email" name="email" required />
        </div>
        <SubmitWrapper>
        <CheckOutButton type="submit">Submit</CheckOutButton>
      </SubmitWrapper>
      </ShippingContainer>
      <ShippingContainer>
        <h4>Shipping: Details:</h4>
        <div>
          <StyledLabel htmlFor="fullname">Full Name:</StyledLabel>
          <StyledInput type="text" id="full-name" name="fullname" required />
        </div>
        <div>
          <StyledLabel htmlFor="street">Street:</StyledLabel>
          <StyledInput type="text" id="street" name="street" required />
        </div>
        <div>
          <StyledLabel htmlFor="city">City:</StyledLabel>
          <StyledInput type="text" id="city" name="city" required />
        </div>
        <div>
          <StyledLabel htmlFor="country">Country:</StyledLabel>
          <StyledSelect
            id="country"
            name="country"
            required
            defaultValue={""}
            onChange={(e) => setShippingCountry(e.target.value)}
          >
            {Object.entries(shippingCountries).map(
              ([countyCode, countyName]) => (
                <option key={countyCode} value={countyCode}>
                  {countyName as string}
                </option>
              )
            )}
          </StyledSelect>
        </div>
        <div>
          <StyledLabel htmlFor="countrystate">Country State:</StyledLabel>
          <StyledSelect
            id="country-state"
            name="countrystate"
            required
            defaultValue={""}
            onChange={(e) => setShippingSubdivision(e.target.value)}
          >
            {Object.entries(shippingSubdivisions).map(
              ([subdivisionCode, subdivisionName]) => (
                <option key={subdivisionCode} value={subdivisionCode}>
                  {subdivisionName as string}
                </option>
              )
            )}
          </StyledSelect>
        </div>
        <div>
          <StyledLabel htmlFor="postalzipcode">Postal Zip Code:</StyledLabel>
          <StyledInput
            type="text"
            id="postal_zip_code"
            name="postalzipcode"
            required
          />
        </div>
      </ShippingContainer>


    </ShippingForm>
  );
};

export default Shipping;
