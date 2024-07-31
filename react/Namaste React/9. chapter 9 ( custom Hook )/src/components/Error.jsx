import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return(
        <div>
            <h1>Opps Something went wrong</h1>
            <h1>{err.data}</h1>
        </div>
    )
}

export default Error;