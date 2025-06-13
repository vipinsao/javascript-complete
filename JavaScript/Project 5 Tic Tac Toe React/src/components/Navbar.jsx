const Navbar = () => {
  return (
    <div className="select-none flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur shadow-md rounded-b-xl text-white font-serif">
      <h1 className="text-2xl font-bold tracking-wide">🎮 TicTacToe</h1>
      <ul className="flex gap-6 text-sm md:text-base font-medium">
        <li className="hover:text-indigo-300 transition">Created by</li>
        <li className="hover:text-indigo-300 transition">About</li>
        <li className="hover:text-indigo-300 transition">Techstack</li>
      </ul>
    </div>
  );
};

export default Navbar;
