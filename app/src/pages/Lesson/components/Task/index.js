import React from 'react';

import Option from '~/pages/Lesson/components/Option';

const Task = ({ data }) => {
  let component = '<div>Default</div>';

  switch (data.type) {
    case 'option':
      component = <Option data={data} />;
      break;
    default:
      component = <div>Default</div>;
  }

  return component;
};

export default Task;
