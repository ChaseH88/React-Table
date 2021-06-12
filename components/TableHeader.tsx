import React, { FC } from "react";

interface ReactTableHeaderGroup {
  headers: { [key: string]: any }[],
  getHeaderGroupProps: () => any,
  getFooterGroupProps: (props: any) => any
}

interface TableHeaderProps {
  headerGroups: ReactTableHeaderGroup[]
  resizeColumns?: boolean
}

const TableHeader: FC<TableHeaderProps> = ({ children, headerGroups, resizeColumns = false }): JSX.Element => {

  return (
    <div className='header'>
      {headerGroups.map((headerGroup: ReactTableHeaderGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map((column: any) => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  <span>
                    {column.text}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  {resizeColumns &&
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
                    />
                  }
                </div>
              ))}
          </div>
        ))}
    </div>
  )

}

export { TableHeader };
