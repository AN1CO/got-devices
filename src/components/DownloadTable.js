import React, { useState, useEffect } from 'react';
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
	const handleSelectAll = (event) => {
		console.log(event);
		if (event.target.checked) {
			const newSelecteds = rows.map((item) => {
				if (item.status === 'available') {
					return item.name;
				}
			});
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};
	return (
		<TableContainer component={Paper} sx={{ minWidth: 600 }}>
			<Table aria-label='device table'>
				<TableHead>
					<TableRow>
						<TableCell padding='checkbox'>
							<Checkbox
								checked={isSelected}
								color='primary'
								onChange={(event) => handleSelectAll(event)}
							/>
						</TableCell>
						<TableCell>
							{selected.length > 0
								? `${selected.length} Selected`
								: 'None Selected'}
						</TableCell>
						<TableCell>Download Selected</TableCell>
					</TableRow>
				</TableHead>
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Device</TableCell>
						<TableCell>Path</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow hover key={row.name}>
							<TableCell padding='checkbox'>
								<Checkbox
									color='primary'
									disabled={row.status === 'scheduled'}
									checked={isSelected}
									onChange={() => {
										setIsSelected(!isSelected);
									}}
								/>
							</TableCell>
							<TableCell scope='row'>{row.name}</TableCell>
							<TableCell>{row.device}</TableCell>
							<TableCell>{row.path}</TableCell>
							<TableCell>
								{row.status.charAt(0).toUpperCase() + row.status.slice(1)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DownloadTable;

// Requirements:
// Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
// The select-all checkbox should be in an unselected state if no items are selected.
// The select-all checkbox should be in a selected state if all items are selected.
// The select-all checkbox should be in an indeterminate state if some but not all items are selected.
// The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
// Clicking the select-all checkbox should select all items if none or some are selected.
// Clicking the select-all checkbox should de-select all items if all are currently selected.
// Status should be correctly formatted
// Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.
// Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.
