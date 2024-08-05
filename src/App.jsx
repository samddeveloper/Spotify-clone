import './App.css';
import Box from '@mui/material/Box';
import Login from './pages/Login';
import Home from './pages/Home';

function App({ spotifyApi }) {
	console.log(spotifyApi);
	return (
		<Box className="App">
			<Home />
		</Box>
	);
}

export default App;
