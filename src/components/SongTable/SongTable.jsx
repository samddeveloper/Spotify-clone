import { Box, Grid } from '@mui/material';

const SongTable = ({}) => {
	return (
		<Box
			p={{ xs: 3, md: 4 }}
			sx={{
				flex: 1,
				overflowY: 'auto',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Grid container px={2} p={1} sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}>
				<Grid sx={{ width: 35, display: 'flex', alignItems: 'center' }} item>
					#
				</Grid>
				<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
					Title
				</Grid>
				<Grid xs={3} item sx={{ display: { xs: 'none', md: 'flex' } }}>
					Album
				</Grid>
				<Grid xs={3} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
					Icon
				</Grid>
			</Grid>
		</Box>
	);
};

export default SongTable;
