import React from "react"
import ReactDOM from "react-dom/client"
import Layout from "../components/Layout"
import City from "../components/City"
import "../css/index.css"

ReactDOM.createRoot(document.getElementById("second-root")).render(
  <React.StrictMode>
    <Layout>
      <City />
    </Layout>
  </React.StrictMode>
)
