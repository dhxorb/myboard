import {  } from 'react'
import './CreateBoard.css'
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate()
    return (
      <div className="CreateBoard">
        <div>게시판</div>
        <body>
<table> 
    <tr><td><h2>글쓰기</h2></td></tr>
    <button onClick={() => { navigate('/list'); }}>List</button>
    <tr><td className="header">Title</td></tr>
    <tr><td><input type="text" placeholder="제목을 입력하세요" name="title"/></td></tr>
    <tr><td className="header">Comment</td></tr>
    <tr><td><textarea placeholder="내용을 입력하세요" name="detail"></textarea></td></tr>
    <tr><td><input type="submit" value="등록" onClick={() => alert('작성 완료!') }/></td></tr>
</table>
</body>

      </div>
  );
  
}

export default Create
