import React from 'react';
import Tour from './Tour';
const Tours = ({ tourInfos }) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tourInfos.map((tourInfo) => {
          return <Tour tourInfo={tourInfo} key={tourInfo.id}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
