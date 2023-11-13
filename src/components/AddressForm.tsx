import React, { useEffect } from "react";
import { useShopContext } from "../context/ShopContext";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
} from "../styles/AddressFormStyles";

interface IAdressFormProps {
      token: string
}
const AddressForm = ( props: IAdressFormProps ) => {

  const { commerce, cart } = useShopContext();
  const { token } = props;
  
  useEffect(() => {     
      commerce.services
      .localeListShippingCountries(token)
      .then((response: any) => console.log(response));
  }, []);

  return (
    <StyledForm>
      {/* <div>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div> */}
    </StyledForm>
  );
};

export default AddressForm;
