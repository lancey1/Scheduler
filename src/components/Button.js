import React from "react";
import classNames from "classnames";
import "components/Button.scss";


export default function Button(props) {
  //  console.log(props)
   let btnClass = classNames("button",{'button--confirm': props.confirm},{'button--danger':props.danger})
   
   // let buttonClass = "button";
   // if (props.confirm) {
   //   buttonClass += " button--confirm";
   // } 
   // if (props.danger) {
   //    buttonClass += " button--danger";
   //  }
   // if (props.disabled) {
   //    return <button disabled className={buttonClass}> {props.children} </button>;
   // }

   return <button onClick={props.onClick} className={btnClass} disabled = {props.disabled}> {props.children} </button>;
 }