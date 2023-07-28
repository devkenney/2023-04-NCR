// Return statement within an if block
// export default function IsEven(props) {
//   if (props.number % 2 === 0) {
//     return <h1>It is even!</h1>
//   } else {
//     return <h1>It is odd!</h1>
//   }
// }

// Single Return Statement, If assigns a value to a variable
export default function IsEven(props) {
  let result

  if (props.number % 2 === 0) {
    result = <h1>It is even!</h1>
  } else {
    result = <h1>It is odd!</h1>
  }

  return result;
}

// Returning a Ternary Operator
// export default function IsEven(props) {
//   return props.number % 2 === 0 ?
//     props.number < 10 ?
//       <h1>It is even and less than 10!</h1> :
//       <h1>It is even and greater than 10</h1> :
//     props.number < 10 ?
//       <h1>It is odd and less than 10</h1> :
//       <h1>It is odd and greater than 10</h1>
// }

// Returning a Ternary Operator but its parts are stored in variables
// export default function IsEven(props) {
//   const condition = props.number % 2 === 0

//   const ifTrue = () => <h1>It is even!</h1>

//   const ifFalse = () => <h1>It is odd!</h1>

//   return condition ? ifTrue() : ifFalse()
// }

// export default function Modal(props) {
//   <div className={props.visible ? "active" : ""}>{props.children}</div>
// }