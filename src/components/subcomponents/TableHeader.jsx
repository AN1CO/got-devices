import React from 'react';
import { TableHead, TableCell, TableRow } from '@mui/material';

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

export const TableHeader = () => {
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
