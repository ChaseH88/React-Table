import React, { FC } from "react";

// Styles
import { PaginationPageCountStyle } from './styled';

interface PaginationPageCountProps {
  currentPage: number,
  totalPages: number
}

const PaginationPageCount: FC<PaginationPageCountProps> = ({
  currentPage = 1,
  totalPages = 1
}): JSX.Element => (
  <PaginationPageCountStyle>
    Page:
    <strong>
      {currentPage} of {totalPages}
    </strong>
  </PaginationPageCountStyle>
);

export { PaginationPageCount }
