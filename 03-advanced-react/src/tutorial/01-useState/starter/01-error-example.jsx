const ErrorExample = () => {
  let count = 0;

  const increment = (count) => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increment} className="btn">
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
