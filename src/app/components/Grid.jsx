import React from 'react';

const SquareRow = ({ n, offset, mobile = false }) => {
  const squares = Array.from({ length: n }, (_, index) => (
    <div 
      key={index} 
      className={`${mobile ? 'w-12 h-12' : 'lg:w-24 lg:h-24 w-12 h-12'} border border-zinc-300`} 
    />
  ));

  return (
    <div 
      className="flex flex-wrap gap-0" 
      style={{ 
        marginLeft: mobile 
          ? `${offset * 48}px` 
          : `${offset * 96}px` 
      }}
    >
      {squares}
    </div>
  );
};

const Grid = () => {
  const rows = [
    { length: 8, offset: 1 },
    { length: 10, offset: 0 },
    { length: 10, offset: 0 },
    { length: 10, offset: 0 },
    { length: 10, offset: 0 },
    { length: 7, offset: 1 }
  ];

  const rowsMobile = [
    { length: 4, offset: 1 },
    { length: 6, offset: 0 },
    { length: 6, offset: 0 },
    { length: 6, offset: 0 },
    { length: 6, offset: 0 },
    { length: 6, offset: 0 },
    { length: 5, offset: 1 },
    { length: 4, offset: 1 }
  ];

  return (
    <div>
      <div className="hidden lg:block">
        {rows.map((row, index) => (
          <SquareRow key={index} n={row.length} offset={row.offset} />
        ))}
      </div>
      <div className="block lg:hidden">
        {rowsMobile.map((row, index) => (
          <SquareRow key={index} n={row.length} offset={row.offset} mobile={true} />
        ))}
      </div>
    </div>
  );
};

export default Grid;