import React, { useState, useEffect, useRef } from 'react';
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
	const checkedObj = useRef({});
	const [checked, setChecked] = useState({});
	const [selected, setSelected] = useState(false);
	const [allSelected, setAllSelected] = useState([]);

	// update with object to handle all eligible boolean checkboxes
	useEffect(() => {
		checkedObj.current = filteredRows.forEach((row) => {
			let obj = {};
			let key = row.name;
			return (obj[key] = false);
		});
	}, [filteredRows]);

	console.log(checkedObj);

	const handleSelectAll = (event) => {
		if (event.target.checked) {
			const newSelecteds = filteredRows.map((n) => n.name);
			setAllSelected(newSelecteds);
			return;
		}
		setAllSelected([]);
	};

	return (
		<Box>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<TableContainer>
					<Table sx={{ minWidth: 700 }} aria-label='device table'>
						<TableTitle
							onSelectAllClick={handleSelectAll}
							rowCount={filteredRows.length}
							numSelected={allSelected.length}
						/>
						<TableHeader />
						<BodyRows
							rows={rows}
							isChecked={selected}
							setChecked={setSelected}
						/>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
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
