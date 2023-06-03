import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Header = ({pageTitle}) => {
  return (
    <>
        <div className="container flex-col">
            <div className="links">
              <p><Link to='/'>{'<'}Back</Link></p>
              <h2>flex tutorial - {pageTitle}</h2>
            </div>

            <div className="links">
                <p><Link to='/flex'>Flex Basics</Link></p>
                <p><Link to='/flex-justify-content'>justify content</Link></p>
                <p><Link to='/flex-align-item'>align item</Link></p>
                <p><Link to='/flex-align-content'>align content</Link></p>
                <p><Link to='/flex-order'>order</Link></p>
                <p><Link to='/flex-grow'>flex grow</Link></p>
            </div>
        </div>
    </>
  )
}

export default Header