/** @format */

export const TableStyles = {
  tableHeaderCell: {
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
  },
  tableRow: {
    '&:last-child td, &:last-child th': {
      border: 0,
      width: '25%',
    },
  },
  tableContainer: {
    width: '100%',
    padding: '1rem', // Add padding as needed
    boxSizing: 'border-box', // Ensure padding is included in width calculation
    '@media (max-width: 768px)': {
      maxWidth: '95%', // Adjust max-width for smaller screens
    },
  },
};
