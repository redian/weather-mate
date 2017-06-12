import React from 'react';
import { Table, TableRow, TableHead, TableCell } from 'react-toolbox/lib/table'

const DaysTable = (props) => {
  if(Object.keys(props.list).length === 0) {
    return null;
  }

  const tableRow = (date) => {
    return (
      <TableRow key={date}>
        <TableCell>{date}</TableCell>
        {props.list[date].map((item, idx) =>
          <TableCell key={idx}>
            Hour: {item.hour}
            <hr />
            Temp: {item.temp} ℃
            <hr />
            Description: {item.description}
            <hr />
            <img alt="{item.description}" src={item.icon} />
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