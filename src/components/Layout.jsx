import Header from "./Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div id="main">{children}</div>
    </>
  )
}
