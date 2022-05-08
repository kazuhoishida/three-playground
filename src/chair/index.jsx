import React from "react"
import ReactDOM from "react-dom/client"
import Layout from "../components/Layout"
import "../css/index.css"
import FirstView from "../components/Chair/FirstView"
import Section1 from "../components/Chair/Section1"
// import Section2 from "../components/Chair/Section2"
import SwitchTexture from "../components/Chair/SwitchTexture"

export default function ChairApp() {
  return (
    <Layout>
      <div className="App">
        <FirstView />
        <SwitchTexture />
        <Section1 />
        {/* <Section2 /> */}
      </div>
    </Layout>
  )
}

ReactDOM.createRoot(document.getElementById("chair-root")).render(
  <React.StrictMode>
    <ChairApp />
  </React.StrictMode>
)
