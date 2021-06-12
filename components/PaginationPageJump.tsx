import React, { FC } from "react";

// Styles
import { PaginationPageJumpStyle } from './styled';

interface PaginationPageJumpProps {
  active: number
  handleChange(n: number): void,
  totalPages: number
}

const PaginationPageJump: FC<PaginationPageJumpProps> = ({
  handleChange = () => null,
  active,
  totalPages
}): JSX.Element => (
  <PaginationPageJumpStyle>
    Go to page:
    <input
      type="number"
      defaultValue={active}
      min={1}
      max={totalPages}
      onChange={({ target: { value } }) => (
        totalPages >= +value && handleChange(
          value ? Number(value) - 1 : 0
        )
      )}
    />
  </PaginationPageJumpStyle>
);

export { PaginationPageJump }
