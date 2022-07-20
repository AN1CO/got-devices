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
	}, [checked, setAllSelected]);

	const downloadClick = () => {
		let downloadArray = [];
		let nameArray = [];
		let pathArray = [];
		rows.filter((row) => {
			if (checked[row.name] === true) {
				downloadArray.push(row);
			}
			return downloadArray;
		});

		if (downloadArray.length > 0) {
			downloadArray.forEach((item) => {
				nameArray.push(item.name);
				pathArray.push(item.path);
			});
		}

		alert(
			nameArray.length > 0 && pathArray.length > 0
				? `Name: ${nameArray.toString()}\n Path: ${pathArray.toString()}`
				: 'No devices selected for download.'
		);
	};

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
					<Button onClick={() => downloadClick()}>Download Selected</Button>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};
