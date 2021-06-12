import React, { FC } from "react";

// Styles
import { PaginationPageSizeStyle } from './styled';

interface PaginationPageSizeProps {
  sizes: number[];
  handlePageSize(n: number): void,
  active: number
}

const PaginationPageSize: FC<PaginationPageSizeProps> = ({
  sizes = [],
  handlePageSize = () => null,
  active
}): JSX.Element => (
  <PaginationPageSizeStyle>
    <select
      value={active}
      onChange={({ target: { value } }) => (
        handlePageSize(+value)
      )}
    >
      {sizes.map(pageSize => (
        <option
          key={pageSize}
          value={pageSize}
        >
          {`Show ${pageSize}`}
        </option>
      ))}
    </select>
  </PaginationPageSizeStyle>
);

export { PaginationPageSize }
