import React from 'react';
import {
	TableHead,
	TableCell,
	TableRow,
	Checkbox,
	Button,
} from '@mui/material';

export const TableTitle = (props) => {
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
