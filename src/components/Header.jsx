import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <div className="container flex-col">
            <h1>flexBox tutorial</h1>
            <div className="links">
                <p><Link to='/'>Flex Basics</Link></p>
                <p><Link to='/justify-content'>justify content</Link></p>
            </div>
        </div>
    </>
  )
}

export default Header