import React from 'react';
import { Table, TableRow, TableHead, TableCell } from 'react-toolbox/lib/table'

const DaysTable = (props) => {
  if(Object.keys(props.list).length === 0) {
    return null;
  }

  const tableRow = (date) => {
    return (
      <TableRow key={date} className="days-table">
        <TableCell>{date}</TableCell>
        {props.list[date].map((item, idx) =>
          <TableCell key={idx}>
            <div className="hour">
              Hour: {item.hour}
            </div>
            <div className="temperature">
              Temp: {item.temp} ℃
            </div>
            <div className="description">
              <img alt="{item.description}" src={item.icon} />
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