import styled from "styled-components";
import Background from '../../assets/background1.svg'

export const Container = styled.div`
   height: max-content;
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
export const ContainerItens = styled.div`
   height: 100vh;
   background: linear-gradient(
      157.44deg, 
      rgba(255, 255, 255, 0.6) 0.84%,
      rgba(255, 255, 255, 0.6) 0.85%, 
      rgba(255, 255, 255, 0.15) 100%);
   border-radius: 61px 61px 0px 0px;
   padding: 50px 36px;
   display: flex;
   flex-direction: column;
`
export const H1 = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 34px;
   line-height: 40px;
   text-align: center;
   color: #FFFFFF;
   margin-bottom: 80px;
    
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