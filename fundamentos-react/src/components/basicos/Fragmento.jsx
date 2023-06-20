import { Fragment } from "react";

export default function Fragmento(props) {
  return (
    <>
      <Fragment >
        <div style={{ border: "1px solid red", padding: "2px 12px" }}>
          {props.children}
        </div>
      </Fragment>
    </>
  )
}