import "../text/text.css"
const Text = ({title, amount}) => {
  return (
    <div className="text">
    <h3><span>{title}</span><br />{amount}</h3>
    
</div>
  )
}

export default Text