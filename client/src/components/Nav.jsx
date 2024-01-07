export default function Nav({handleClick}) {
  return (
    <>
      <nav className="p-5 font-bold w-screen text-center h-20 flex flex-row justify-between items-center">
      <button className="text-4xl" onClick={()=>{handleClick()}}>?</button>
        <h1 className="text-5xl font-rubik text-white self-center">Wordle x Wars</h1>
        <a href="https://github.com/akash942">
        <img className="w-10" src="./github-mark-white.png" alt="github logo" />
        </a>
      </nav>
      <hr className="h-px bg-white-200"/>
    </>
  );
}
