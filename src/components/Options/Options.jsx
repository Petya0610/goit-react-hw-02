export function ({ onLeaveFreedback }) {
  return (
    <div>
      <button onClick={() => onLeaveFreedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Good</button>
      <button onClick={() => onLeaveFeedback('bad')}>Good</button>
    </div>
  );
}