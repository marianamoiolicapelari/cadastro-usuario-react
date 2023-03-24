import styled from "styled-components";

import Background from '../../assets/background.svg'

export const Container = styled.div`
   height: 100%;
   min-height: 100vh;
   background: url('${Background}');
   background-size: cover;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;
`
export const Image = styled.img`
   margin-top: 30px;
`
export const Button = styled.button`
   width: 342px;
   height: 74px;
   background: transparent;
   border-radius: 14px;
   border: 1px solid #fff;
   font-style: normal;
   font-weight: 700;
   font-size: 17px;
   line-height: 28px;
   color: #FFFFFF;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   margin-top: 120px;

   &:hover {
      opacity: 0.8;
   }

   &:active {
      opacity: 0.5;
   }

   img {
      transform: rotateY(180deg);
   }
`

export const User = styled.li`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 20px;
   background: rgba(255, 255, 255, 0.25);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 14px;
   border: none;
   outline: none;
   width: 342px;
   height: 58px;
   
   p {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
   }

   button {
      background: none;
      border: none;
      cursor: pointer;
   }

 
`