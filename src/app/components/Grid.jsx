const SquareRow = ({ n, offset }) => {
  const squares = Array.from({ length: n }, (_, index) => (
    <div 
      key={index} 
      className="w-24 h-24 border border-zinc-300" 
    />
  ));

  return (
    <div className="flex flex-wrap gap-0" style={{ marginLeft: `${offset * 96}px` }}>
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

  return (
    <div>
      {rows.map((row, index) => (
        <SquareRow key={index} n={row.length} offset={row.offset} />
      ))}
    </div>
  );
};

export default Grid;

