// Style your elements here
import styled from 'styled-components'

export const ButtonEl = styled.button`
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  opacity: ${props => (props.applyBg ? 1 : 0.5)};
  @media screen and (max-width: 576px) {
    width: 60px;
  }
`
export const ListEl = styled.li`
  margin-right: 10px;
  @media screen and (max-width: 576px) {
    margin-right: 5px;
  }
`
