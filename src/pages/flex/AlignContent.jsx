import { useState } from 'react';
import Button from '../../components/Button';
import './flex.css';
import Header from '../../components/Header';

const AlignContent = () => {
  const boxCount = 9; // Number of boxes to render

  const boxes = [];
  for (let i = 1; i <= boxCount; i++) {
    const className = `flex-item box-${i}`;
    boxes.push(<div className={className} key={i}>Box-{i}</div>);
  }

  const [containerStyle, setContainerStyle] = useState({height:'400px'});
  const height = '400px'
  const fwrap = 'wrap'
  const jc = 'center'

  const handleBtn = (flexD, ac) => {
    
    const conatiner = {
      display: 'flex',
      flexDirection: flexD,
      alignContent: ac,
      height: height,
      flexWrap: fwrap,
      justifyContent: jc,
    }
    setContainerStyle(conatiner)
  }

  const showAlert = (msg) => {
    alert(msg)
  }

  return (
    <main>
        <Header pageTitle={'align-content'} />
      
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
                <Button text={'space-between'} onclick={() =>{ handleBtn('row','space-between'); showAlert('Shrink the window to know what will happen!') }} />
                <Button text={'space-around'} onclick={() =>{ handleBtn('row','space-around'); showAlert('Shrink the window to know what will happen!') }} />
            </div>

            <div className="col mt">
                <h3 className='mb' style={{textAlign:'center'}}>for column</h3>

                <Button text={'stretch'} onclick={() =>{ handleBtn('column','stretch') }} />
                <Button text={'flex-start'} onclick={() =>{ handleBtn('column','flex-start') }} />
                <Button text={'flex-end'} onclick={() =>{ handleBtn('column','flex-end') }} />
                <Button text={'center'} onclick={() =>{ handleBtn('column','center') }} />
                <Button text={'space-between'} onclick={() =>{ handleBtn('column','space-between') }} />
                <Button text={'space-around'} onclick={() =>{ handleBtn('column','space-around') }} />
            </div>
        </div>
      </div>
    </main>
  );
};

export default AlignContent;
