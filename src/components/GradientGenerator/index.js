// Write your code here
import {Component} from 'react'
import {
  MainDiv,
  HeadEl,
  UlList,
  InputColor,
  InputDivEl,
  InputsDivEl,
  GenerateBtn,
  ParaEl,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeBtn: 'TOP',
    direction: 'top',
    firstColor: '#d25de9',
    secondColor: '#3db1f5',
    value1: '#d25de9',
    value2: '#3db1f5',
  }

  updateActiveBtn = El => {
    const {directionId, value} = El
    this.setState({activeBtn: directionId, direction: value})
  }

  updateFirst = event => {
    this.setState({value1: event.target.value})
  }

  updateSecond = event => {
    this.setState({value2: event.target.value})
  }

  changeBgColor = () => {
    const {value1, value2} = this.state
    this.setState({firstColor: value1, secondColor: value2})
  }

  render() {
    const {
      value1,
      value2,
      activeBtn,
      firstColor,
      secondColor,
      direction,
    } = this.state
    const BgColor = `to ${direction},${firstColor},${secondColor}`
    return (
      <MainDiv data-testid="gradientGenerator" Bg={BgColor}>
        <HeadEl>Generate a CSS Color Gradient</HeadEl>
        <ParaEl>Choose Direction</ParaEl>
        <UlList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              activeBtn={activeBtn}
              updateActiveBtn={this.updateActiveBtn}
              item={each}
            />
          ))}
        </UlList>
        <ParaEl>Pick The Colors</ParaEl>
        <InputsDivEl>
          <InputDivEl>
            <ParaEl>{value1}</ParaEl>
            <InputColor
              onChange={this.updateFirst}
              type="color"
              value={value1}
            />
          </InputDivEl>
          <InputDivEl>
            <ParaEl>{value2}</ParaEl>
            <InputColor
              onChange={this.updateSecond}
              type="color"
              value={value2}
            />
          </InputDivEl>
        </InputsDivEl>
        <GenerateBtn onClick={this.changeBgColor} type="button">
          Generate
        </GenerateBtn>
      </MainDiv>
    )
  }
}
export default GradientGenerator
