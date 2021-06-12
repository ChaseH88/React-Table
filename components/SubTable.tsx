import React, { useRef, FC } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { MDBBtn, MDBIcon } from "mdbreact";
import { useDispatch } from "react-redux";

// Styles
import { SubTableStyle, SubTableCellStyle } from './styled';

interface SubTableProps {
  data: any;
  closeRow:() => void
}

const SubTable: FC<SubTableProps> = ({ data, closeRow }): JSX.Element => {

  const dispatch = useDispatch();


  const changeCopyState = (copyName: string) => {
    dispatch({
      type: "ALERT",
      payload: {
        type: "success",
        message: `${copyName} has been copied`,
      },
    });
  };

  /**
   * Renders the individual cells that are used
   * when the row is clicked and expanded.
   * @param key
   * @param val
   * @returns
   */
   const renderTable = (key: string, val: any): JSX.Element => {

    let value; //placeholder

    // Copy Button
    const copyButton = useRef<any>(null);

    // Add the empty span if no 'val' is given
    if(!val?.length){
      val = (
        <span
          style={{ opacity: .3 }}
          className='null'
        >
          N/A
        </span>
      );
    }

    // Add break tags in place in new lines
    if(typeof val === "string"){
      value = val.replace(/\n/g, `<br />`);
    }

    // Render the call
    return (
      <SubTableCellStyle>
        <div className="key">
          <h4>{key}</h4>
        </div>
        <div
          className="val"
          onClick={(e: any) => (
            e.detail === 3 && copyButton.current.click()
          )}
        >
          {value ? <span>{value}</span> : val}
          {val.length && (
            <CopyToClipboard
              text={value as any}
              onCopy={() => changeCopyState(key)}
            >
              <button ref={copyButton}>
                <MDBIcon icon="copy" />
              </button>
            </CopyToClipboard>
          )}
        </div>
      </SubTableCellStyle>
    );
  };

  return (
    <SubTableStyle>
      <div className="container">
        {Object.entries(data).map(([a, b]) => renderTable(a, b))}
      </div>
      <div className="toolbar">
        <MDBBtn
          color='blue'
          size='sm'
          id="submit-action"
          onClick={() => closeRow()}
        >
          Close
        </MDBBtn>
      </div>
    </SubTableStyle>
  );
};

export { SubTable };
