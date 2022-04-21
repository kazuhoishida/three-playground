import "./css/App.css"
import Layout from "./components/Layout"
import FirstView from "./components/FirstView"
import Section1 from "./components/Section1"

export default function App() {
  return (
    <Layout>
      <div className="App">
        <FirstView />
        <Section1 />
      </div>
    </Layout>
  )
}
