import React from "react"
import { navigate } from "@reach/router"

const NotFound = () => {
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/home")
    }, 1000)
  }, [])

  return <div>Page not found. You're being redirected...</div>
}

export default NotFound
