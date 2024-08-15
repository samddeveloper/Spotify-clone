import { Avatar, Box, Grid, Typography, Skeleton } from '@mui/material';
import { formatTime } from '../../utils/formatTime';

const SongRow = ({ images, title, artist, album, duration, i, loading, spotifyApi, contextUri, position }) => {
	const image = images?.length > 0 ? images[0].url : null;

	const onRowClick = async () => {
		const song = {
			context_uri: contextUri,
			offset: { position },
			position_ms: 0,
			title,
			image: image ? image : {},
			artist,
			duration,
			position
		};
		await spotifyApi.play(song);
	};

	return (
		<Grid
			onClick={onRowClick}
			container
			px={2}
			p={1}
			sx={{
				width: '100%',
				color: 'text.secondary',
				fontSize: 14,
				cursor: 'pointer',
				'&:hover': { backgroundColor: '#ffffff10' }
			}}
		>
			<Grid sx={{ width: 35, display: 'flex', alignItems: 'center', fontSize: 16 }} item>
				{i + 1}
			</Grid>
			<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
				{loading ? (
					<Skeleton variant="rectangular" width={40} height={40} />
				) : (
					<Avatar src={image} alt={null} variant="square" />
				)}
				<Box>
					<Typography sx={{ fontSize: 16, color: 'text.primary' }}>
						{loading ? <Skeleton variant="text" width={130} height={24} /> : title}
					</Typography>
					<Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
						{loading ? <Skeleton variant="text" width={50} height={18} /> : artist}
					</Typography>
				</Box>
			</Grid>
			<Grid xs={3} item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
				{loading ? <Skeleton variant="text" width={50} height={24} /> : album}
			</Grid>
			<Grid xs={3} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
				{loading ? <Skeleton variant="text" width={50} height={18} /> : formatTime(duration)}
			</Grid>
		</Grid>
	);
};

export default SongRow;
