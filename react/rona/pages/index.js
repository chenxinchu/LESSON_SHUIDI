import styled, { createGlobalStyle } from 'styled-components'
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
// css in js  js 代码里写css
// jsx   html in js  ts react   babel preset-react
// 首字母大写
// 作用于当前组件， 不影响其他地方
const Wrapper = styled.p`
  color: blue;
`
// 样式组件 全局
const GlobalStyle =  createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
` 

export default function IndexPage() {
  return (
    <div>
      <h2>Global</h2>
      <GlobalStyle />
      {/* <Wrapper>
        Hello World
      </Wrapper> */}
      <Stats url="https://covid19.mathdro.id/api">
      </Stats>
      <CountrySelector></CountrySelector>
    </div>
  )
}