import { useState } from 'react';
import Button from '../../components/Button';
import './flex.css';
import Header from '../../components/Header';

const Flex = () => {
  const boxCount = 9; // Number of boxes to render

  const boxes = [];
  for (let i = 1; i <= boxCount; i++) {
    const className = `flex-item box-${i}`;
    boxes.push(<div className={className} key={i}>Box-{i}</div>);
  }

  const [containerStyle, setContainerStyle] = useState({});

  const handleBtn = (disp, flexD, flexwrap, height,gap) => {
    const conatiner = {
      display: disp,
      flexDirection: flexD,
      flexWrap: flexwrap,
      height: height,
      gap: gap,
    }
    setContainerStyle(conatiner)
  }

  const showAlert = (msg) => {
    alert(msg)
  }

  return (
    <main>
      <Header pageTitle={'Flex Basics'} />
      <div className="container-1" style={containerStyle}>
        {boxes}
      </div>
      <div className="container fixed white-box">
      {/* <div className="white-box"> */}
        <Button text={'reset'} reset={'resetBtn'} onclick={() => handleBtn('')} />
        <Button text={'flex'} onclick={() => handleBtn('flex')} />
        <Button text={'inline-flex'} onclick={() => handleBtn('inline-flex')} />
        <Button text={'row-reverse'} onclick={() => handleBtn('flex', 'row-reverse')} />
        <Button text={'column'} onclick={() => handleBtn('flex', 'column')} />
        <Button text={'col-reverse'} onclick={() => handleBtn('flex', 'column-reverse')} />
        <Button text={'row-wrap'} onclick={() => { handleBtn('flex','','wrap'); showAlert('Shrink the window to know what will happen!') }} />
        <Button text={'row-wrap-reverse'} onclick={() =>{ handleBtn('flex','','wrap-reverse'); showAlert('Shrink the window to know what will happen!') }} />
        <Button text={'col-wrap'} onclick={() => { handleBtn('flex','column','wrap','500px') }} />
        <Button text={'col-wrap-reverse'} onclick={() =>{ handleBtn('flex','column','wrap-reverse','500px') }} />
        <Button text={'row gap'} onclick={() =>{ handleBtn('flex','','wrap','','30px') }} />
        <Button text={'col gap'} onclick={() =>{ handleBtn('flex','column','wrap','','30px') }} />
      {/* </div> */}
      </div>
    </main>
  );
};

export default Flex;
