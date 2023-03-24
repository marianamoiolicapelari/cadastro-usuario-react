import styled from "styled-components";

import Background from '../../assets/background1.svg';

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

export const InputLabel = styled.p`
   letter-spacing: -0.408px;
   color: #EEEEEE;
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 22px;
   margin-left: 25px;
`

export const Input = styled.input`
   background: rgba(255, 255, 255, 0.25);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 14px;
   border: none;
   outline: none;
   width: 342px;
   height: 58px;
   padding-left: 25px;
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   color: #FFFFFF;
   margin-bottom: 34px;
`

export const Button = styled.button`
   width: 342px;
   height: 74px;
   background: rgba(0, 0, 0, 0.8);
   border-radius: 14px;
   border: none;
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
   margin-top: 130px;

   &:hover {
      opacity: 0.8;
   }

   &:active {
      opacity: 0.5;
   }
` 
