import "./css/App.css"
import Layout from "./components/Layout"
import FirstView from "./components/FirstView"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"

export default function App() {
  return (
    <Layout>
      <div className="App">
        <FirstView />
        <Section1 />
        <Section2 />
      </div>
    </Layout>
  )
}
