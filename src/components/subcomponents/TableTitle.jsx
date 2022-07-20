import React, { useEffect } from 'react';
import {
	TableHead,
	TableCell,
	TableRow,
	Checkbox,
	Button,
} from '@mui/material';

export const TableTitle = (props) => {
	const {
		setAllSelected,
		allSelected,
		setChecked,
		numSelected,
		rows,
		checked,
	} = props;

	const selectAll = (value) => {
		setAllSelected(value);
		setChecked((prevState) => {
			const newState = { ...prevState };
			for (const inputName in newState) {
				newState[inputName] = value;
			}
			return newState;
		});
	};

	useEffect(() => {
		let allChecked = true;
		for (const inputName in checked) {
			if (checked[inputName] === false) {
				allChecked = false;
			}
		}
		if (allChecked) {
			setAllSelected(true);
		} else {
			setAllSelected(false);
		}
	}, [checked]);

	console.log(rows);

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						color='primary'
						checked={!!allSelected}
						onChange={(event) => selectAll(event.target.checked)}
						inputProps={{
							'aria-label': 'select all available devices',
						}}
					/>
				</TableCell>
				<TableCell key='selected'>
					{numSelected > 0 && !!allSelected
						? `${numSelected} Selected`
						: 'None Selected'}
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
