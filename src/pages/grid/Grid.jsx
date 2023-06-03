import { useState } from 'react';
import Button from '../../components/Button';
import Header2 from '../../components/Header2';
import './Grid.css';

const Grid = () => {
  const boxCount = 9; // Number of boxes to render

  const boxes = [];
  for (let i = 1; i <= boxCount; i++) {
    const className = `grid-item box-${i}`;
    boxes.push(<div className={className} key={i}>Box-{i}</div>);
  }

  const [containerStyle, setContainerStyle] = useState({});

  const handleBtn = (disp,gtc,gtr,ht,gt,gap,ji,ai,pi) => {
    const conatiner = {
      display: disp,
      gridTemplateColumns: gtc,
      gridTemplateRows: gtr,
      height: ht,
      gridTemplate:gt,
      gap:gap,
      justifyItems: ji,
      alignItems: ai,
      placeItems: pi,
    }
    setContainerStyle(conatiner)
  }

  const infoLog = (props) => {
    console.log(props);
  }

  return (
    <main>
      <Header2 pageTitle={'Grid'} />
      <div className="container-2" style={containerStyle}>
        {boxes}
      </div>
      <div className="container fixed white-box">
        <Button text={'reset'} reset={'resetBtn'} onclick={() => handleBtn('')} />
        <Button text={'grid'} onclick={() => handleBtn('grid')} />
        <Button text={'inline-grid'} onclick={() => handleBtn('inline-grid')} />
        <Button text={'grid-template-columns'} onclick={() => {handleBtn('grid','repeat(3,1fr)'); infoLog("gtc: 'grid','repeat(3,1fr)'") }} />
        <Button text={'grid-template-rows'} onclick={() => {handleBtn('grid','repeat(3,1fr)','repeat(3,1fr)','400px'); infoLog("gtr: 'grid','repeat(3,1fr)','repeat(3,1fr)','400px'") }} />
        <Button text={'grid-template'} onclick={() => {handleBtn('grid','','','400px','repeat(3,1fr) / repeat(4,1fr)') }} />
        <Button text={'gap'} onclick={() => {handleBtn('grid','','','400px','repeat(3,1fr) / repeat(4,1fr)','10px') }} />
        <Button text={'justify-items-start'} onclick={() => {handleBtn('grid','','','400px','repeat(3,1fr) / repeat(3,1fr)','','start') }} />
        <Button text={'justify-items-center'} onclick={() => {handleBtn('grid','','','400px','repeat(3,1fr) / repeat(3,1fr)','','center') }} />
        <Button text={'align-items-center'} onclick={() => {handleBtn('grid','','','400px','repeat(3,1fr) / repeat(3,1fr)','','','center') }} />
        <Button text={'place-items-center'} onclick={() => {handleBtn('grid','','','400px','repeat(3,1fr) / repeat(3,1fr)','','','','center') }} />
      </div>
    </main>
  );
};

export default Grid;
