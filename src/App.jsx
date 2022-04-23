import "./css/App.css"
import Layout from "./components/Layout"
import FirstView from "./components/FirstView"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import EnvironmentSection from "./components/EnvironmentSection"
import MovingLight from "./components/MovingLight"
import SwitchTexture from "./components/SwitchTexture"

export default function App() {
  return (
    <Layout>
      <div className="App">
        <FirstView />
        <Section1 />
        <Section2 />
        <EnvironmentSection />
        <MovingLight />
        <SwitchTexture />
      </div>
    </Layout>
  )
}
