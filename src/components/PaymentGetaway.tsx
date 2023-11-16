import React, { useState, FormEvent, ChangeEvent } from 'react';
import Card, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
  PaymentContainer
} from "../styles/PaymentGetawayStyles";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from '../utils/payment';

interface IPaymentGateawayProps {
  setPayment: (obj: object) => void 
}

interface ReactCreditCards {
  number: string | number;
  name: string;
  expiry: string | number;
  cvc: string | number;
  focused?: string | undefined | '';
  issuer?: string | undefined;
  locale?: { valid: string } | undefined;
  formData?: null | object;
}
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
const PaymentGetaway = ( props: IPaymentGateawayProps) => {
  const [creditCardInfo, setCreditCardInfo] = useState<ReactCreditCards>({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  });

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

    if (target.name === 'number') {
      value = formatCreditCardNumber(value);
    } else if (target.name === 'expiry') {
      value = formatExpirationDate(value);
    } else if (target.name === 'cvc') {
      value = formatCVC(value);
    }

    setCreditCardInfo((prevInfo) => ({ ...prevInfo, [target.name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert('You have finished payment!');
  };

  const { name, number, expiry, cvc, focused, issuer } = creditCardInfo;

  return (
    <PaymentContainer>
      <div className="App-payment">
        <h1>Enter your payment details</h1>
        <h4>please input your information below</h4>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <small>Name on card:</small>
            <input
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
            <small>Card Number:</small>
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d ]{16,22}"
              maxLength={19}
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <small>Expiration Date:</small>
            <input
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
            <small>CVC:</small>
            <input
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
          <input type="hidden" name="issuer" value={issuer} />
          <div className="form-actions">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </PaymentContainer>
  );
};

export default PaymentGetaway;
