import React, { FC } from "react";

// Components
import {
  PaginationButton,
  PaginationPageCount,
  PaginationPageJump,
  PaginationPageSize
} from './';

// Styles
import { PaginationStyles } from './styled';

interface PaginationProps {
  gotoPage(page: number): any,
  previousPage(): any,
  nextPage(): any,
  setPageSize(size: number): any,
  canPreviousPage: boolean,
  canNextPage: boolean,
  pageCount: number,
  pageIndex: number,
  pageSize: number,
  pageOptions: any
}

const Pagination: FC<PaginationProps> = ({
  gotoPage,
  previousPage,
  nextPage,
  setPageSize,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageSize,
  pageOptions
}): JSX.Element => (
  <PaginationStyles>
    <div className="pagination-container">
      <div className="pagination-buttons left">
        <PaginationButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          icon={'angle-double-left'}
        />
        <PaginationButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          icon={'angle-left'}
        />
      </div>
      <div className="pagination-pagecount">
        <PaginationPageCount
          currentPage={pageIndex + 1}
          totalPages={pageOptions.length}
        />
      </div>
      <div className="pagination-pagejump">
        <PaginationPageJump
          active={pageIndex + 1}
          handleChange={(e: number) => gotoPage(e)}
          totalPages={pageOptions.length}
        />
      </div>
      <div className="pagination-pagesize">
        <PaginationPageSize
          sizes={[10, 20, 30, 40, 50]}
          handlePageSize={(e: number) => setPageSize(e)}
          active={pageSize}
        />
      </div>
      <div className="pagination-buttons right">
        <PaginationButton
          onClick={() => nextPage()}
          disabled={!canNextPage}
          icon={'angle-right'}
        />
        <PaginationButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          icon={'angle-double-right'}
        />
      </div>
    </div>
  </PaginationStyles>
)

export { Pagination }
