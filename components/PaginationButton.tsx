import React, { FC } from "react";
import { MDBIcon, MDBBtn } from "mdbreact";

interface PaginationButtonProps {
  onClick(): any,
  disabled: boolean,
  icon: 'angle-double-left' | 'angle-left' | 'angle-double-right' | 'angle-right'
}

const PaginationButton: FC<PaginationButtonProps> = ({
  onClick,
  disabled,
  icon
}): JSX.Element => (
  <MDBBtn
    onClick={() => onClick()}
    disabled={disabled}
    color={'blue'}
    size={'sm'}
  >
    <MDBIcon
      size='1x'
      icon={icon as any}
    />
  </MDBBtn>
);

export { PaginationButton }
