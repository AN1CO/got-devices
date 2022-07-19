import React from 'react';
import { TableBody, TableCell, TableRow, Checkbox } from '@mui/material';

export const BodyRows = (props) => {
	const { isChecked, setChecked, rows } = props;

	return (
		<TableBody>
			{rows.map((row) => (
				<TableRow hover role='checkbox' key={row.name}>
					<TableCell padding='checkbox'>
						<Checkbox
							color='primary'
							name={row.name}
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
