import { useState } from 'react';
import Button from '../../components/Button';
import './flex.css';
import Header from '../../components/Header';

const Flex2 = () => {
  const boxCount = 5; // Number of boxes to render

  const boxes = [];
  for (let i = 1; i <= boxCount; i++) {
    const className = `flex-item box-${i}`;
    boxes.push(<div className={className} key={i}>Box-{i}</div>);
  }

  const [containerStyle, setContainerStyle] = useState({});
//   const [direction, setDirection] = useState('row')
//   const [height, setHeight] = useState('')

//   const handleDirectionBtn = (dir) => {
//     setDirection(dir)
//     dir === 'column' ? setHeight('400px') : setHeight('')
//   }

  const handleBtn = (disp, flexD, jc,height) => {
    
    const conatiner = {
      display: disp,
      flexDirection: flexD,
      justifyContent: jc,
      height:height,
    }
    setContainerStyle(conatiner)
  }

  return (
    <main>
        <Header />
      
      <div className="container-1" style={containerStyle}>
        {boxes}
      </div>
      <div className="container fixed white-box wrap-content">
        <div className="wrap-content">
            
            <Button text={'reset'} reset={'resetBtn'} onclick={() => handleBtn('')} />
            {/* <Button text={'row'} onclick={() => {handleDirectionBtn('row'); handleBtn('flex', 'row')}} />
            <Button text={'column'} onclick={() => {handleDirectionBtn('column'); handleBtn('flex', 'column')}} /> */}

            <div className="row mt">
                <h3 className='mb' style={{textAlign:'center'}}>for row</h3>

                <Button text={'flex-start'} onclick={() =>{ handleBtn('flex','','flex-start') }} />
                <Button text={'flex-end'} onclick={() =>{ handleBtn('flex','','flex-end') }} />
                <Button text={'center'} onclick={() =>{ handleBtn('flex','','center') }} />
                <Button text={'space-around'} onclick={() =>{ handleBtn('flex','','space-around') }} />
                <Button text={'space-between'} onclick={() =>{ handleBtn('flex','','space-between') }} />
                <Button text={'space-evenly'} onclick={() =>{ handleBtn('flex','','space-evenly') }} />
            </div>

            <div className="col mt">
                <h3 className='mb' style={{textAlign:'center'}}>for column</h3>

                <Button text={'flex-start'} onclick={() =>{ handleBtn('flex','column','flex-start','400px') }} />
                <Button text={'flex-end'} onclick={() =>{ handleBtn('flex','column','flex-end','400px') }} />
                <Button text={'center'} onclick={() =>{ handleBtn('flex','column','center','400px') }} />
                <Button text={'space-around'} onclick={() =>{ handleBtn('flex','column','space-around','400px') }} />
                <Button text={'space-between'} onclick={() =>{ handleBtn('flex','column','space-between','400px') }} />
                <Button text={'space-evenly'} onclick={() =>{ handleBtn('flex','column','space-evenly','400px') }} />
            </div>
        </div>
      </div>
    </main>
  );
};

export default Flex2;
