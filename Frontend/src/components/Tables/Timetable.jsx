/** @format */

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableStyles } from './TableStyles';
import { StyledPageArea } from '../../themes/styles/default';

function createData(day, pewees, juniors, seniors) {
  return { day, pewees, juniors, seniors };
}

const rows = [
  createData('Tuesday', '5pm - 5.30pm', '5pm - 6pm', '6pm - 7pm'),
  createData('Wednesday', 'No Class', 'No Class', '6pm - 7pm'),
  createData('Thursday', '5pm - 5.30pm', '5pm - 6pm', '6pm - 7pm'),
  createData('Saturday', 'No Class', 'No Class', '6pm - 7pm'),
];

export default function BasicTable() {
  return (
    <StyledPageArea>
      <TableContainer component={Paper} sx={{ ...TableStyles.tableContainer }}>
        <h1>Timetable</h1>
        <Table sx={{ minWidth: 'auto' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={TableStyles.tableHeaderCell}>Day</TableCell>
              <TableCell align="right" sx={TableStyles.tableHeaderCell}>
                4yrs - 10yrs
              </TableCell>
              <TableCell align="right" sx={TableStyles.tableHeaderCell}>
                10yrs - 16yrs
              </TableCell>
              <TableCell align="right" sx={TableStyles.tableHeaderCell}>
                Adults
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.day} sx={TableStyles.tableRow}>
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell align="right" sx={{ width: '25%' }}>
                  {row.pewees}
                </TableCell>
                <TableCell align="right" sx={{ width: '25%' }}>
                  {row.juniors}
                </TableCell>
                <TableCell align="right" sx={{ width: '25%' }}>
                  {row.seniors}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPageArea>
  );
}
