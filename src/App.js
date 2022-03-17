import { createGlobalStyle } from "styled-components";

// 템플릿들 추가
import TodoTemplate from "./TodoTemplate";
import TodoHeader from "./TodoHeader";

const GlobalStyle = createGlobalStyle`
  body {
    background : royalblue;
  }
`;

function App() {
  return (
    <>  
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHeader/>
      </TodoTemplate>
    </>
  );
}

export default App;
