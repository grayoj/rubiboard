import React from 'react';
import { saveAs } from 'file-saver';

interface Rider {
  name: string;
  age: number;
  // Add more properties as needed
}

interface ExportToExcelButtonProps {
  riders: Rider[];
}

const ExportToExcelButton: React.FC<ExportToExcelButtonProps> = ({
  riders,
}) => {
  const handleExportClick = () => {
    const data = riders.map((rider) => ({
      Name: rider.name,
      Age: rider.age,
    }));

    const csvString = convertArrayToCSV(data);

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8' });

    // Save the Blob as a file using FileSaver.js
    saveAs(blob, 'riders.csv');
  };

  // Convert an array of objects to a CSV string
  const convertArrayToCSV = (data: object[]) => {
    const csvRows: string[] = [];
    const headers = Object.keys(data[0]);

    // Add the headers as the first row
    csvRows.push(headers.join(','));

    data.forEach((item: any) => {
      const values = headers.map((header) => item[header]);
      csvRows.push(values.join(','));
    });

    // Join the rows with line breaks
    return csvRows.join('\n');
  };

  return (
    <button
      className='bg-productGreen px-2 py-1 rounded-md my-2'
      onClick={handleExportClick}
    >
      Export to Excel
    </button>
  );
};

export default ExportToExcelButton;
