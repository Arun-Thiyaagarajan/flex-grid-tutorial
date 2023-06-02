import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Header = ({pageTitle}) => {
  return (
    <>
        <div className="container flex-col">
            <h1>flexBox tutorial - {pageTitle}</h1>
            <div className="links">
                <p><Link to='/'>Flex Basics</Link></p>
                <p><Link to='/justify-content'>justify content</Link></p>
                <p><Link to='/align-item'>align item</Link></p>
                <p><Link to='/align-content'>align content</Link></p>
                <p><Link to='/flex-order'>order</Link></p>
                <p><Link to='/flex-grow'>flex grow</Link></p>
            </div>
        </div>
    </>
  )
}

export default Header