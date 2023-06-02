// eslint-disable-next-line react/prop-types
const Button = ({text, onclick, reset}) => {
  return (
    <>
        <button className={`btn m ${reset}`} onClick={onclick}>{text}</button>
    </>
  )
}

export default Button