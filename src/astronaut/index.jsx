import React from "react"
import ReactDOM from "react-dom/client"
import Layout from "../components/Layout"
// import EnvironmentSection from "../components/EnvironmentSection"
import MovingLight from "../components/MovingLight/MovingLight"
import "../css/index.css"

ReactDOM.createRoot(document.getElementById("astronaut-root")).render(
  <React.StrictMode>
    <Layout>
      <MovingLight />
      {/* <EnvironmentSection /> */}
    </Layout>
  </React.StrictMode>
)
