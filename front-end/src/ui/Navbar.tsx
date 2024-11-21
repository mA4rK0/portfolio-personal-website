export default function Navbar() {
  return (
    <section className="flex text-white pl-[31.313rem] gap-x-[5.188rem]">
      <a href="#home">
        <p className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">Home</p>
      </a>
      <a href="#portfolio">
        <p className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">Portfolio</p>
      </a>
      <a href="#about">
        <p className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">About</p>
      </a>
      <a href="#skill">
        <p className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">Skill</p>
      </a>
      <a href="#contact">
        <p className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">Contact</p>
      </a>
      <a href="#signin">
        <p className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">Sign In</p>
      </a>
    </section>
  );
}
