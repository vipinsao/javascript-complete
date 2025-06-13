const Footer = () => {
  return (
    <div className="px-8 py-4 bg-white/10 backdrop-blur rounded-t-xl shadow-md text-zinc-200 font-serif flex justify-between items-center mt-10">
      <h2 className="text-lg font-semibold tracking-wide">
        🛠 Practice Project
      </h2>
      <ul className="flex gap-6 text-sm md:text-base font-medium">
        <li className="hover:text-pink-300 transition">Created by</li>
        <li className="hover:text-pink-300 transition">About</li>
        <li className="hover:text-pink-300 transition">Techstack</li>
      </ul>
    </div>
  );
};

export default Footer;
