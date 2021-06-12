import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  useTable,
  useResizeColumns,
  usePagination,
  useFlexLayout,
  useSortBy,
  useFilters,
  useGlobalFilter
} from 'react-table';

// Styles
import { TableStyle } from './components/styled';

// Components
import { MDBIcon } from 'mdbreact';

// Components
import {
  TableBody,
  TableHeader,
  Pagination,
  GlobalFilter,
} from './components';
interface TableProps {
  keyField: any;
  data: any;
  columns: any;
  expandRows?: any;
  wrapperClasses?: any;
  showColumnToggle?: any;
  showSearchBar?: any;
  rowsPerPage?: number;
  resizeColumns?: boolean
}

const Table: FC<TableProps> = ({
  columns,
  data,
  rowsPerPage,
  resizeColumns = true
}): JSX.Element => {

  /**
   * Initial/empty state for active cell
   * This is used when a row is clicked, the
   * 'useState' populates this with data and
   * the UI is updated to reflect
   */
  const nullActiveRow = {
    id: null,
    expanded: false,
    cellData: null
  }

  const [ activeRow, setActiveRow ] = useState<{
    id: string | null,
    expanded: boolean,
    cellData: null | { [key: string]: any }
  }>(nullActiveRow);

  /**
   * Helper function to instantly hide the active row
   */
  const hideActiveRow = useCallback(() => (
    setActiveRow(nullActiveRow)
  ), []);

  // React Table Setup
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    resetResizing,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: useMemo(() => ({
          minWidth: 30,
          width: 30,
          maxWidth: 200
        }),
      []),
    },
    useFlexLayout,
    resizeColumns as any && useResizeColumns,
    useFilters,
    useGlobalFilter,
    useSortBy, // this hook must be before 'usePagination'
    usePagination,
  ) as any;

  // to do later, custom config per table based on individual table state
  // console.log(state);
  useEffect(() => {
    if(rowsPerPage){
      setPageSize(rowsPerPage)
    }
  }, []);

  return (
    <>
      <TableStyle>
      {resizeColumns &&
        <div className="toolbar">
          <button
            onClick={resetResizing}
            className={'reset-table-cols'}
            style={{
              visibility: Object.keys(state?.columnResizing)?.length > 1 ? 'visible' : 'hidden'
            }}
          >
            <MDBIcon
              icon="redo"
              title="Reset Table Columns"
            />
          </button>
        </div>
      }
        <div {...getTableProps()} className="container">
          <GlobalFilter
            rows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <TableHeader
            headerGroups={headerGroups}
            resizeColumns={resizeColumns}
          />
          <TableBody
            getTableBodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
            handleActiveCell={setActiveRow}
            activeRow={activeRow}
            closeActiveRow={hideActiveRow}
          />
        </div>
        <Pagination
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageSize}
          previousPage={previousPage}
          setPageSize={setPageSize}
        />
      </TableStyle>
    </>
  )
}

export { Table };
