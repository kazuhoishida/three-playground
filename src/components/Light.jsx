export default function Light({ position }) {
  return (
    <>
      <ambientLight />
      <pointLight position={position} />
    </>
  )
}
