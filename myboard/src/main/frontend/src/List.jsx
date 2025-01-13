import { } from 'react'
import './List.css'
import { useNavigate } from "react-router";

function List() {
    const navigate = useNavigate();
    return (
        <div className="List">
            <body>
                <table className="table">
                    <tr><td colSpan="2"><h2>게시판</h2></td></tr>
                    <button onClick={() => { navigate('/create'); }}>
                        글 작성
                    </button>
                    <tr className="header">
                        <td className="num">번호</td>
                        <td className="title">제목</td>
                        <td>작성자</td>
                        <td>작성날짜</td>
                    </tr>
                </table>

            </body>

        </div>
    );

}

export default List;