import {useRouteError} from "react-router-dom"

const Error = () => {
    const error =useRouteError();
  return (
    <div style={{textAlign:"center"}}>
        <h1>Oops!!</h1>
        <h2>Under Making!!</h2>
        <h3>{error.status} : {error.statusText}</h3>
    </div>
  )
}

export default Error