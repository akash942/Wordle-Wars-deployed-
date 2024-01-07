export default function Cross({ addLetter }) {
  return (
    <button
      className="wide-btn"
      onClick={() => {
        addLetter((prev) => {
          return prev.slice(0,-1);
        });
      }}
    >
      x
    </button>
  );
}
