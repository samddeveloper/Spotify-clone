import { Avatar, Box, Typography, Skeleton } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import SongTable from '../components/SongTable/SongTable';

const Playlist = ({ spotifyApi, token }) => {
	const [playlistInfo, setPlaylistInfo] = useState({});
	const [songs, setSongs] = useState();
	const [status, setStatus] = useState({ isLoading: true, isError: null });
	const { id } = useParams();

	const formatSongs = useCallback(
		(items) =>
			items.map((item, i) => {
				console.log({ item, i });
				const { track } = item;
				track.contextUri = `Spootify:playlist:${id}`;
				track.position = i;
				return track;
			}),
		[id]
	);

	useEffect(() => {
		const getData = async () => {
			setStatus({ isLoading: true, isError: null });
			try {
				const playlistDetails = await spotifyApi.getPlaylist(id);
				const images = playlistDetails.body.images;

				const defaultImageUrl = 'https://via.placeholder.com/300'; // Fallback image URL
				let imageUrl = defaultImageUrl;

				if (images && images.length > 0) {
					const validImages = images.filter((img) => img.url);
					if (validImages.length > 0) {
						imageUrl = validImages[0].url;
					}
				}

				setPlaylistInfo({
					image: imageUrl,
					name: playlistDetails.body.name
				});
				console.log(playlistDetails);
				const { items } = playlistDetails.body.tracks;
				const formattedSongs = formatSongs(items);
				//format songs
				setSongs(formattedSongs);
			} catch (e) {
				console.error(e);
				({ isLoading: false, isError: e });
			}
		};

		getData().finally(() => {
			setStatus({ isloading: false, isError: null });
		});
	}, [id, formatSongs]);

	return (
		<Box id="Playlist__page" sx={{ backgroundColor: 'background.paper', flex: 1, overflowY: 'auto' }}>
			<Box
				p={{ xs: 3, md: 4 }}
				sx={{
					width: '100%',
					background: 'linear-gradient(0deg, #121212 0%, #1bd76060 100%);',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: { xs: 'flex-start', md: 'flex-end', xl: 'center' },
					gap: 3,
					boxSizing: 'border-box',
					flexDirection: { xs: 'column', md: 'row' }
				}}
			>
				{status.isLoading ? (
					<Skeleton
						variant="square"
						sx={{ width: { xs: '100%', md: 235 }, height: { xs: '100%', md: 235 } }}
					/>
				) : (
					<Avatar
						src={playlistInfo?.image}
						variant="square"
						alt={playlistInfo?.name}
						sx={{ boxShadow: 15, width: { xs: '100%', md: 235 }, height: { xs: '100%', md: 235 } }}
					/>
				)}
				<Box>
					<Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'text.primary' }}>Playlist</Typography>
					{status.isLoading ? (
						<Skeleton variant="text" sx={{ fontSize: { xs: 42, md: 72 }, width: 200 }} />
					) : (
						<Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 'bold', color: 'text.primary' }}>
							{playlistInfo?.name}
						</Typography>
					)}
				</Box>
			</Box>
			<SongTable />
		</Box>
	);
};

export default Playlist;
