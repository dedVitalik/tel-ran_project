import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import './Loader.scss';

function Loader() {
  return (
    <div className="loader-wrapper">
      <BallTriangle
        height={200}
        width={200}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible
      />
    </div>
  );
}

export default Loader;
