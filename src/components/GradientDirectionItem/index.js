// Write your code here

import {ButtonEl, ListEl} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, activeBtn, updateActiveBtn} = props
  const {displayText, directionId, value} = item
  const applyBg = directionId === activeBtn

  const onClickChangeBg = () => {
    const El = {directionId, value}
    updateActiveBtn(El)
  }

  return (
    <ListEl>
      <ButtonEl onClick={onClickChangeBg} applyBg={applyBg} type="button">
        {displayText}
      </ButtonEl>
    </ListEl>
  )
}
export default GradientDirectionItem
