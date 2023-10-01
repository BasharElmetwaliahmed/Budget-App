import { json, useRouteError } from "react-router-dom"

function Error() {
    const error=useRouteError()
  return (
    <div className="text-center my-auto ">
        <h3 className="text-4xl font-bold mb-4">SomeThing Go Wrong!</h3>
        <p className="text-[#1dbbc3] text-2xl">{error.data.message||error.status}</p>
    </div>
  )
}

export default Error