// Style your elements here
import styled from 'styled-components'

export const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.Bg});
`
export const HeadEl = styled.h1`
  color: #ffffff;

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`
export const UlList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  margin-left: -32px;
`
export const InputColor = styled.input`
  width: 120px;
  height: 50px;
  border: none;
  background-color: inherit;
  @media screen and (max-width: 576px) {
    width: 100px;
  }
`
export const InputDivEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputsDivEl = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`
export const GenerateBtn = styled.button`
  padding: 10px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  background-color: #00c9b7;
  margin-top: 20px;
  border: none;
  width: 120px;
`
export const ParaEl = styled.p`
  color: white;
  font-weight: bold;
`
