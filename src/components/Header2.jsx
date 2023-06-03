import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Header2 = ({pageTitle}) => {
  return (
    <>
        <div className="container flex-col">
            <div className="links">
              <p><Link to='/'>{'<'}Back</Link></p>
              <h2>grid tutorial - {pageTitle}</h2>
            </div>
            <div className="links">
                <p><Link to='/grid'>grid basics</Link></p>
                <p><Link to='/grid-template-area'>grid-template-area</Link></p>
            </div>
        </div>
    </>
  )
}

export default Header2;