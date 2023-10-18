

import React from 'react';

function MonthYear() {

  const currMonth = new Date().getMonth();
  
  var today = new Date();

  const month = today.toLocaleString('default', { month: 'short' });
  

  return <div className='d-flex flex-row e'> {month} {currMonth}, </div>;
}

export default MonthYear;