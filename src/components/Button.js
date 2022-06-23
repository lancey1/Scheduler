import React from "react";
import classNames from "classnames";
import "components/Button.scss";


export default function Button(props) {
   let btnClass = classNames("button",{'button--confirm': props.confirm},{'button--danger':props.danger})
      return <button onClick={props.onClick} className={btnClass} disabled = {props.disabled}> {props.children} </button>;
 }