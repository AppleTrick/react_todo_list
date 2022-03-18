import { createGlobalStyle } from "styled-components";

// 템플릿들 추가
import TodoTemplate from "./TodoTemplate";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

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
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
