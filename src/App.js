import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoTemplate";

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
        <h1>hello</h1>
      </TodoTemplate>
    </>
  );
}

export default App;
