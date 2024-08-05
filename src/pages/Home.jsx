import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<img src="/profilepic.png" alt="Sammie Slootman" style={{ maxWidth: '50%', maxHeight: '50%' }} />
			<Button size="large" variant="contained" href="mailto:sammie.slootman@gmail.com">
				Kontakta mig
			</Button>
		</Box>
	);
};

export default Home;
