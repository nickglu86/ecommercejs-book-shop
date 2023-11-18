import styled from "styled-components";

export const CartModalHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(10, 46, 90, 1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartModalFooter = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  text-align: center;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgb(10, 46, 90);
`;

export const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(100);
  padding: 30px;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const CartModalHeaderTitle = styled.h4`
  width: 100%;
  text-align: center;
  padding-right: 50px;
`;

export const CartCheckoutListContainer = styled.ul`
  padding: 35px 18px;
  width: 800px;
  min-height: 200px;
  margin: 0 auto 60px;
`;

export const CartProductRemoveItem = styled.button`
  all: unset;
  display: none;
  position: absolute;
  top: 5px;
  right: 20px;
  border-radius: 20px;
  border: 1px solid #9e9898;
  width: 17px;
  height: 16px;
  margin: 0 auto;
  text-align: center;
  line-height: 14px;
  padding-bottom: 2px;
  color: #9e9898;
  cursor: pointer;
`;
export const CartCheckoutListItem = styled.li`
  display: flex;
  width: 800px;
  justify-content: space-between;
  margin: 0px auto;
  display: flex;
  position: relative;
  padding: 10px 0px;
  justify-content: left;
  margin: 0px auto;

  &:hover ${CartProductRemoveItem} {
    display: block;
  }
`;

export const CartTotalContainer = styled.div`
  position: absolute;
  bottom: 80px;

  width: 100%;
  margin: 0px auto;
  padding: 30px 50px;
`;

export const CartCheckoutItemImage = styled.div`
  width: 90px;
  img {
    width: 60px;
  }
`;

export const CartProductsInfo = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CartProductPrice = styled.span`
  color: #35324c;
  font-weight: 600;
  padding-left: 4px;
`;

export const CheckOutButton = styled.button`
  // background-color: rgb(10, 46, 90);
  // color: #fff;
  // border: 1px solid rgb(10, 46, 90);
  // border-radius: 18px;
  // font-size: 16px;

  background-color: #fff;
  color: #0f111196;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  font-size: 15px;
 

  box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);
  padding: 6px 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    transition: 0.5s;
    background-color: #F7FAFA;
    border-color: #D5D9D9;
     
  }
`;
