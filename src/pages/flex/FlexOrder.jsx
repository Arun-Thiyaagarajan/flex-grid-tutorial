import { useState } from 'react';
import Button from '../../components/Button';
import './flex.css';
import Header from '../../components/Header';

const FlexOrder = () => {
  const boxCount = 5; // Number of boxes to render

  const boxes = [];
  for (let i = 1; i <= boxCount; i++) {
    const className = `flex-item box-${i}`;
    boxes.push(<div className={className} key={i}>Box-{i}</div>);
  }

  const [containerStyle, setContainerStyle] = useState({});

  const handleBtn = (order) => {
    
    const conatiner = {
      display: 'flex',
      order: order,
    }
    setContainerStyle(conatiner)
  }

  return (
    <main>
        <Header pageTitle={'Flex Order'} />
      
      <div className="container-1" style={containerStyle}>
        {boxes}
      </div>
      <div className="container fixed white-box wrap-content">
        <div className="wrap-content">
            
            <Button text={'reset'} reset={'resetBtn'} onclick={() => handleBtn('')} />
            <Button text={'0'} onclick={() =>{ handleBtn('0') }} />
            <Button text={'1'} onclick={() =>{ handleBtn('1') }} />
            <Button text={'2'} onclick={() =>{ handleBtn('2') }} />
            <Button text={'3'} onclick={() =>{ handleBtn('3') }} />
            <Button text={'4'} onclick={() =>{ handleBtn('4') }} />
            <Button text={'5'} onclick={() =>{ handleBtn('5') }} />
        </div>
      </div>
    </main>
  );
};

export default FlexOrder;
