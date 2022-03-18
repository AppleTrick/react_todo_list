import { createGlobalStyle } from "styled-components";

// 템플릿들 추가
import TodoTemplate from "./TodoTemplate";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

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
        <TodoList/>
      </TodoTemplate>
    </>
  );
}

export default App;
