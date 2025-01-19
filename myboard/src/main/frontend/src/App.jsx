import { } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Create from './CreateBoard';
import List from './List';

export default function App() {

	return (
		<div className='App'>
			<BrowserRouter>
				<Link to='/list'>goto list</Link>
				<Link to='/create'>goto create</Link>
				<Routes>
					<Route path="/list" element={<List />}></Route>
					<Route path='/create' element={<Create />}></Route>
				</Routes>;
			</BrowserRouter>
		</div>
	);
};
//redirect사용하면 /list 경로를 홈페이지로 사용가능