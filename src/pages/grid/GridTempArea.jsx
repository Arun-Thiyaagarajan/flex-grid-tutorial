import './Grid.css';
import Header2 from '../../components/Header2'

const GridTempArea = () => {
  return (
    <>
        <Header2 pageTitle={'grid-template-area'} />
        <div className="container-3">
          <header>header</header>
          <section>content</section>
          <nav>navigation</nav>
          <aside>sidebar</aside>
          <footer>footer</footer>
        </div>
    </>
  )
}

export default GridTempArea