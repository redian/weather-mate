import React from 'react';
import { Table, TableRow, TableHead, TableCell } from 'react-toolbox/lib/table'

const DaysTable = (props) => {
  if(Object.keys(props.list).length === 0) {
    return null;
  }

  const tableRow = (date) => {
    const oDate = new Date(date);
    // Print a more readable date i.e. Fri, 16 Jun
    const dateString = oDate.toUTCString().substring(0, 11); 
    return (
      <TableRow key={date} className="days-table">
        <TableCell>{dateString}</TableCell>
        {props.list[date].map((item, idx) =>
          <TableCell key={idx}>
            <div className="hour">
              Hour: {item.hour}
            </div>
            <div className="temperature">
              Temp: {item.temp} ℃
            </div>
            <div className="description">
              <img alt={item.description} src={item.icon} />
              {item.description}
            </div>
          </TableCell>
        )}
      </TableRow>
    )
  }


  return (
    <Table selectable={false}>
      <TableHead>
        <TableCell>Date</TableCell>
      </TableHead>
      {Object.keys(props.list).map((date, idx) => {
        return tableRow(date);
      })}
    </Table>
  )
}

export default DaysTable;