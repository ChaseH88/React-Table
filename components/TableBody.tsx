import React, { FC } from "react";
import uuidv4 from "uuid";

// Components
import { SubTable } from './SubTable';

interface TableBodyProps {
  rows: any[],
  getTableBodyProps(): any
  prepareRow(row: any): any
  handleActiveCell: React.Dispatch<any>
  activeRow: {
    id: string | null,
    expanded: boolean,
    cellData: null | { [key: string]: any }
  },
  closeActiveRow:() => void
}

const TableBody: FC<TableBodyProps> = ({
  getTableBodyProps,
  prepareRow,
  rows,
  handleActiveCell,
  activeRow: { id, expanded, cellData },
  closeActiveRow
}) => {

  const handleOnClick = (_id: string, selected: any) => {
    handleActiveCell({
      id: _id,
      expanded: true,
      cellData: selected
    })
  }

  return (
    <div className='body' {...getTableBodyProps()}>
      {rows.map((row: any, i: number) => {
        prepareRow(row);
        return (
          <>
            <div
              {...row.getRowProps()}
              onClick={() => (
                handleOnClick(
                  row.id,
                  row.original
                )
              )}
              className="tr"
              key={uuidv4}
            >
              {row.cells.map((cell: any) => (
                <div {...cell.getCellProps()} className="td">
                  {cell.render('Cell')}
                </div>
              ))}
            </div>
            {(expanded && row.id === id) && (
              <SubTable
                data={cellData}
                closeRow={closeActiveRow}
              />
            )}
          </>
        )
      })}
    </div>
  )
}

export { TableBody };
