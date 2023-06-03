import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Flex from './pages/flex/flex'
import Flex2 from './pages/flex/Flex2'
import AlignItem from './pages/flex/AlignItem'
import AlignContent from './pages/flex/AlignContent'
import FlexOrder from './pages/flex/FlexOrder'
import FlexGrow from './pages/flex/FlexGrow'
import Home from './pages/Home'
import Grid from './pages/grid/Grid'
import GridTempArea from './pages/grid/GridTempArea'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/flex" element={<Flex />} />
          <Route path="/flex-justify-content" element={<Flex2 />} />
          <Route path="/flex-align-item" element={<AlignItem />} />
          <Route path="/flex-align-content" element={<AlignContent />} />
          <Route path="/flex-order" element={<FlexOrder />} />
          <Route path="/flex-grow" element={<FlexGrow />} />
          
          <Route path="/grid" element={<Grid />} />
          <Route path="/grid-template-area" element={<GridTempArea />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
