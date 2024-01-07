export default function Enter({ setSubmit, word, exists }) {
  return (
    <button
      onClick={() => {
        if (word.length===5 && exists(word)) {
            setSubmit(true)
            
        }
      }}
      className="wide-btn hover:bg-purple"
    >
      Enter
    </button>
  );
}
