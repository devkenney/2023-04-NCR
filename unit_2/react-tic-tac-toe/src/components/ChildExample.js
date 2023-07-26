export default function ChildExample(props) {
  return (
    <div>
      <p>This is an image</p>
      <p>{props.children}</p>
    </div>
  )
}