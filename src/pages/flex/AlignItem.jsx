import { useState } from 'react';
import Button from '../../components/Button';
import './flex.css';
import Header from '../../components/Header';

const AlignItem = () => {
  const boxCount = 5; // Number of boxes to render

  const boxes = [];
  for (let i = 1; i <= boxCount; i++) {
    const className = `flex-item box-${i}`;
    boxes.push(<div className={className} key={i}>Box-{i}</div>);
  }

  const [containerStyle, setContainerStyle] = useState({height:'400px'});
  const height = '400px'

  const handleBtn = (flexD, ai) => {
    
    const conatiner = {
      display: 'flex',
      flexDirection: flexD,
      alignItems: ai,
      height: height,
    }
    setContainerStyle(conatiner)
  }

  return (
    <main>
        <Header pageTitle={'align-item'} />
      
      <div className="container-1" style={containerStyle}>
        {boxes}
      </div>
      <div className="container fixed white-box wrap-content">
        <div className="wrap-content">
            
            <Button text={'reset'} reset={'resetBtn'} onclick={() => handleBtn('')} />

            <div className="row mt">
                <h3 className='mb' style={{textAlign:'center'}}>for row</h3>

                <Button text={'stretch'} onclick={() =>{ handleBtn('row','stretch') }} />
                <Button text={'flex-start'} onclick={() =>{ handleBtn('row','flex-start') }} />
                <Button text={'flex-end'} onclick={() =>{ handleBtn('row','flex-end') }} />
                <Button text={'center'} onclick={() =>{ handleBtn('row','center') }} />
                <Button text={'baseline'} onclick={() =>{ handleBtn('row','baseline') }} />
            </div>

            <div className="col mt">
                <h3 className='mb' style={{textAlign:'center'}}>for column</h3>

                <Button text={'stretch'} onclick={() =>{ handleBtn('column','stretch') }} />
                <Button text={'flex-start'} onclick={() =>{ handleBtn('column','flex-start') }} />
                <Button text={'flex-end'} onclick={() =>{ handleBtn('column','flex-end') }} />
                <Button text={'center'} onclick={() =>{ handleBtn('column','center') }} />
            </div>
        </div>
      </div>
    </main>
  );
};

export default AlignItem;
