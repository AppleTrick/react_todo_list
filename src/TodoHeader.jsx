import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: royalblue;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;


const TodoHeader = () => {

    return (
        <TodoHeadBlock>
            <h1>현재 시간</h1>
            <div className="day">요일</div>
            <div className="tasks-left">남은 할일</div>
        </TodoHeadBlock>
    )
}

export default TodoHeader;