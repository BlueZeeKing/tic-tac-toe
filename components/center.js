import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  height: ${props => props.height};
`
const Grow = styled.div`
  flex-grow: 1;
`

export default function Center(props) {
  return (
    <FlexContainer direction="row">
      <Grow />
      <FlexContainer direction="column" height="100vh">
        <Grow />
        {props.children}
        <Grow />
      </FlexContainer>
      <Grow />
    </FlexContainer>
  )
}