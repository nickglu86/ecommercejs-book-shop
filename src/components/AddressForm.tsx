import React, { useEffect, FormEvent } from "react";
import { useShopContext } from "../context/ShopContext";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton
} from "../styles/AddressFormStyles";

interface IAdressFormProps {
  token: string;
  setShippingData: Function
}
const AddressForm = (props: IAdressFormProps) => {
  const { commerce, cart } = useShopContext();
  const { token, setShippingData } = props;


  useEffect(() => {
    // commerce.services
    // .localeListShippingCountries(token)
    // .then((response: any) => console.log(response));
  }, []);

  const formSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var data = new FormData(event.currentTarget);
    let formObject = Object.fromEntries(data.entries());
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
    })
    // console.log(formObject.city);
  }

  return (
    <StyledForm onSubmit={formSubmit}>
      <h4>Customer</h4>
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
      <h4>Shipping:</h4>
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
        <StyledInput type="text" id="country" name="country" required />
      </div>
      <div>
        <StyledLabel htmlFor="countrystate">Country State:</StyledLabel>
        <StyledInput
          type="text"
          id="country-state"
          name="countrystate"
          required
        />
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
      <div>
            <StyledButton type="submit">Submit</StyledButton>
          </div>
    </StyledForm>
  );
};

export default AddressForm;
