import { Link } from "react-router-dom"
import Button from "../components/Button"

const Home = () => {
  return (
    <>
        <div className="container">
            <div className="box">
                <h1>css flexbox & grid tutorial</h1>
                <div className="mt center">
                    <Link to={'/flex'}><Button text={'flex tutorial'} /></Link>
                    <Link to={'/grid'}><Button text={'grid tutorial'} /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home