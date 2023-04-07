import React from 'react';

const List = ({ children }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', alignItems: 'center' }}>
      {children}
    </div>
  );
};

export default List;