export default function Navbar() {
  return (
    <section className="flex text-white pl-[38.813rem] gap-[5.188rem]">
      <a href="#home" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
        Home
      </a>
      <a href="#portfolio" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
        Portfolio
      </a>
      <a href="#about" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
        About
      </a>
      <a href="#skill" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
        Skill
      </a>
      <a href="#contact" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
        Contact
      </a>
    </section>
  );
}
