import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Flex from './pages/flex/flex'
import Flex2 from './pages/flex/Flex2'
import AlignItem from './pages/flex/AlignItem'
import AlignContent from './pages/flex/AlignContent'
import FlexOrder from './pages/flex/FlexOrder'
import FlexGrow from './pages/flex/FlexGrow'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Flex />} />
          <Route path="/justify-content" element={<Flex2 />} />
          <Route path="/align-item" element={<AlignItem />} />
          <Route path="/align-content" element={<AlignContent />} />
          <Route path="/flex-order" element={<FlexOrder />} />
          <Route path="/flex-grow" element={<FlexGrow />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
