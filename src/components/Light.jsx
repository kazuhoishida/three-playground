export default function Light({ ...props }) {
  return (
    <>
      <ambientLight />
      <pointLight {...props} />
    </>
  )
}
