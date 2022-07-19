import React, { useState, useEffect } from 'react';
import {
	Box,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableCell,
	TableRow,
	Paper,
	Checkbox,
	Button,
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

const headCells = [
	{
		id: 'blank',
		label: '',
	},
	{
		id: 'name',
		label: 'Name',
	},
	{
		id: 'device',
		label: 'Device',
	},
	{
		id: 'path',
		label: 'Path',
	},
	{
		id: 'status',
		label: 'Status',
	},
];

const TableHeadTitle = (props) => {
	const { onSelectAllClick, numSelected, rowCount } = props;

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						color='primary'
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all available devices',
						}}
					/>
				</TableCell>
				<TableCell key='selected'>
					{numSelected > 0 ? `${numSelected} Selected` : 'None Selected'}
				</TableCell>
				<TableCell key='download_selected'>
					<Button onClick={() => alert('this is an alert')}>
						Download Selected
					</Button>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

const TableHeadHeader = () => {
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id}>{headCell.label}</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

const TableBodyRows = (props) => {
	const { isChecked, setChecked } = props;

	return (
		<TableBody>
			{rows.map((row) => (
				<TableRow hover role='checkbox' key={row.name}>
					<TableCell padding='checkbox'>
						<Checkbox
							color='primary'
							disabled={row.status === 'scheduled'}
							checked={isChecked}
							onChange={() => {
								setChecked(!isChecked);
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
	);
};

const DownloadTable = () => {
	const [selected, setSelected] = useState(false);
	const [allSelected, setAllSelected] = useState([]);
	const handleSelectAll = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((item) => {
				console.log('what is item', item);
				let availableItems;
				if (item.status === 'available') {
					availableItems = item.name;
				}
				return availableItems;
			});
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
						<TableHeadTitle
							onSelectAllClick={handleSelectAll}
							rowCount={rows.length}
							numSelected={allSelected.length}
						/>
						<TableHeadHeader />
						<TableBodyRows isChecked={selected} setChecked={setSelected} />
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
