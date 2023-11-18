import styled from "styled-components";

export const CheckoutContainer = styled.div`
    padding: 40px 80px;
    border-radius: 25px;
    width: 900px;
    min-height: 700px;
    margin: 40px auto 0;
    border: 1px solid #e4e4e455;
`

export const StepsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  counter-reset: section;
  border-bottom: 1px solid #e4e4e455;
  padding: 5px 0 15px;
  margin: 0;

    
    li{
        opacity: 0.5;
    }
    
    li:before {
        opacity: 0.5;
        counter-increment: section;  
        content:  counter(section);
        padding: 2px 8px;
        margin-right: 2px;
        border-radius: 30px;
        background: #cccccc;
        color: #fff;    
      }

      li.active, li.active:before{
        opacity: 1;
        color: #000;    
      }

`