import { useState } from 'react';
import Button from '../../components/Button';
import './flex.css';
import Header from '../../components/Header';

const FlexGrow = () => {
  const boxCount = 5; // Number of boxes to render

  const boxes = [];
  for (let i = 1; i <= boxCount; i++) {
    const className = `flex-item box-${i}`;
    boxes.push(<div className={className} key={i}>Box-{i}</div>);
  }

  const [containerStyle, setContainerStyle] = useState({});

  const handleBtn = (fg) => {
    
    const conatiner = {
      display: 'flex',
      flexGrow: fg,
    }
    setContainerStyle(conatiner)
  }

  return (
    <main>
        <Header pageTitle={'Flex Grow'} />
      
      <div className="container-1" style={containerStyle}>
        {boxes}
      </div>
      <div className="container fixed white-box wrap-content">
        <div className="wrap-content">
            
            <Button text={'reset'} reset={'resetBtn'} onclick={() => handleBtn('')} />
            <Button text={'flex-grow'} onclick={() =>{ handleBtn('0') }} />
        </div>
      </div>
    </main>
  );
};

export default FlexGrow;
