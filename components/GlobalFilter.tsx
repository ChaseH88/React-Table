import React, { FC, useState } from 'react';
import { useAsyncDebounce } from 'react-table';

// Styles
import { GlobalFilterStyle } from './styled';

/**
 * REQUIRED: this file will not compile correctly without
 * importing this module. This is due to an defined function
 * that 'useAsyncDebounce' needs. By exposing the module, the
 * hook can find the reference it needs
 */
import "regenerator-runtime";

interface GlobalFilter {
  rows: any
  globalFilter: any
  setGlobalFilter: any
}

/**
 * Handles table searching
 */
const GlobalFilter: FC<GlobalFilter> = ({
  rows,
  globalFilter,
  setGlobalFilter,
}): JSX.Element => {

  const [value, setValue] = useState(globalFilter)

  // handle change
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 250);

  return (
    <GlobalFilterStyle>
      <input
        value={value || ""}
        onChange={({ target: { value } }) => {
          setValue(value);
          onChange(value);
        }}
        placeholder={
          `Search ${rows.length} rows...`
        }
      />
    </GlobalFilterStyle>
  )
}

export { GlobalFilter }
