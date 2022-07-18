import * as React from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableCell,
	TableRow,
	Paper,
	Checkbox,
} from '@mui/material';

const rows = [
	{
		name: 'smss.exe',
		device: 'Stark',
		path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
		status: 'scheduled',
	},

	{
		name: 'netsh.exe',
		device: 'Targaryen',
		path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
		status: 'available',
	},

	{
		name: 'uxtheme.dll',
		device: 'Lannister',
		path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
		status: 'available',
	},

	{
		name: 'cryptbase.dll',
		device: 'Martell',
		path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
		status: 'scheduled',
	},

	{
		name: '7za.exe',
		device: 'Baratheon',
		path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
		status: 'scheduled',
	},
];

const DownloadTable = () => {
	const [isSelected, setIsSelected] = React.useState(false);
	const [selected, setSelected] = React.useState([]);
	return (
		<TableContainer component={Paper} sx={{ minWidth: 600 }}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell padding='checkbox'>
							<Checkbox color='primary' />
						</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Device</TableCell>
						<TableCell>Path</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell padding='checkbox'>
								<Checkbox color='primary' />
							</TableCell>
							<TableCell scope='row'>{row.name}</TableCell>
							<TableCell>{row.device}</TableCell>
							<TableCell>{row.path}</TableCell>
							<TableCell>{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DownloadTable;
