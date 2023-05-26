import React from 'react';
import './customStyles/Checkmark.css';

const Checkmark: React.FC = () => {
  const svgStyle: React.CSSProperties = {
    strokeDasharray: '480px, 480px',
    strokeDashoffset: '960px',
  };

  const coloredCircleStyle: React.CSSProperties = {
    strokeDasharray: '480px, 480px',
    strokeDashoffset: '960px',
  };

  const polylineStyle: React.CSSProperties = {
    strokeDasharray: '100px, 100px',
    strokeDashoffset: '200px',
  };

  return (
    <div className='animation-ctn animate-bounce'>
      <div className='icon icon--order-success svg'>
        <svg xmlns='http://www.w3.org/2000/svg' width='154px' height='154px'>
          <g fill='none' stroke='#22AE73' strokeWidth='2'>
            <circle cx='77' cy='77' r='72' style={svgStyle}></circle>
            <circle
              id='colored'
              fill='#22AE73'
              cx='77'
              cy='77'
              r='72'
              style={coloredCircleStyle}
            ></circle>
            <polyline
              className='st0'
              stroke='#fff'
              strokeWidth='10'
              points='43.5,77.8 63.7,97.9 112.2,49.4 '
              style={polylineStyle}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Checkmark;
