import React, { useState, FormEvent, ChangeEvent } from "react";
import Card, { Focused } from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../utils/payment";
import { Button } from "../styles/commomStyles";
import {
  FormInput,
  FormLabel,
  PaymentForm,
  SubmitWrapper,
} from "../styles/FormStyles";
import { PaymentContainer, PaymentDetails } from "../styles/CheckoutStyles";

interface IPaymentGateawayProps {
  setCreditCardData: (obj: object) => void;
  nextStep: () => void;
}

interface ReactCreditCards {
  number: string | number;
  name: string;
  expiry: string;
  cvc: string | number;
  focused?: string | undefined | "";
  issuer?: string | undefined;
  locale?: { valid: string } | undefined;
  formData?: null | object;
}

const PaymentGetaway = (props: IPaymentGateawayProps) => {
  const [creditCardInfo, setCreditCardInfo] = useState<ReactCreditCards>({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });

  const { setCreditCardData, nextStep } = props;

  const handleCallback = ({ issuer }: { issuer: string }, isValid: boolean) => {
    if (isValid) {
      setCreditCardInfo((prevInfo) => ({ ...prevInfo, issuer }));
    }
  };

  const handleInputFocus = ({ target }: { target: { name: string } }) => {
    setCreditCardInfo((prevInfo) => ({
      ...prevInfo,
      focused: target.name,
    }));
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let value = target.value;

    if (target.name === "number") {
      value = formatCreditCardNumber(value);
    } else if (target.name === "expiry") {
      value = formatExpirationDate(value);
    } else if (target.name === "cvc") {
      value = formatCVC(value);
    }

    setCreditCardInfo((prevInfo) => ({ ...prevInfo, [target.name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setCreditCardData({
      number: creditCardInfo.number,
      expiry_month: creditCardInfo.expiry?.split("/")[1],
      expiry_year: `20${creditCardInfo.expiry?.split("/")[0]}`,
      cvc: creditCardInfo.cvc,
    });
    nextStep();
  };

  const { name, number, expiry, cvc, focused, issuer } = creditCardInfo;

  return (
    <PaymentContainer>
      <PaymentDetails>Enter your payment details:</PaymentDetails>
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={handleCallback}
      />
      <PaymentForm onSubmit={handleSubmit}>
        <div className="form-group">
          <FormLabel>Name on card:</FormLabel>
          <FormInput
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            pattern="[a-zA-Z-]+"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <FormLabel>Card Number:</FormLabel>
          <FormInput
            type="tel"
            name="number"
            className="form-control"
            placeholder="Card Number"
            pattern="[\d ]{16,22}"
            maxLength={16}
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <FormLabel>Expiration Date:</FormLabel>
          <FormInput
            type="tel"
            name="expiry"
            className="form-control"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <FormLabel>CVC:</FormLabel>
          <FormInput
            type="tel"
            name="cvc"
            className="form-control"
            placeholder="CVC"
            pattern="\d{3}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <FormInput type="hidden" name="issuer" value={issuer} />
        <SubmitWrapper>
          <Button type="submit">Submit</Button>
        </SubmitWrapper>
      </PaymentForm>
    </PaymentContainer>
  );
};

export default PaymentGetaway;
