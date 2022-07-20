import React, { useState, useEffect } from 'react';
import { Box, Table, TableContainer, Paper } from '@mui/material';
import { TableTitle, TableHeader, BodyRows } from './subcomponents';

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
	const filteredRows = rows.filter((row) => row.status === 'available');
	const [checked, setChecked] = useState({});
	const [allSelected, setAllSelected] = useState(false);

	// update with object to handle all eligible boolean checkboxes
	useEffect(() => {
		let checkedObj = {};
		filteredRows.forEach((row) => {
			let key = row.name;
			return (checkedObj[key] = false);
		});
		setChecked(checkedObj);
	}, []);

	return (
		<Box>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<TableContainer>
					<Table sx={{ minWidth: 700 }} aria-label='device table'>
						<TableTitle
							allSelected={allSelected}
							setAllSelected={setAllSelected}
							setChecked={setChecked}
							checked={checked}
							numSelected={filteredRows.length}
							rows={filteredRows}
						/>
						<TableHeader />
						<BodyRows rows={rows} isChecked={checked} setChecked={setChecked} />
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
};

export default DownloadTable;
