export default function Navbar() {
  return (
    <section className="flex text-white pl-[31.313rem] gap-x-[5.188rem]">
      <a href="#home">
        <p className="hover:text-lightBlue font-semibold">Home</p>
      </a>
      <a href="#portfolio">
        <p className="hover:text-lightBlue font-semibold">Portfolio</p>
      </a>
      <a href="#about">
        <p className="hover:text-lightBlue font-semibold">About</p>
      </a>
      <a href="#skill">
        <p className="hover:text-lightBlue font-semibold">Skill</p>
      </a>
      <a href="#contact">
        <p className="hover:text-lightBlue font-semibold">Contact</p>
      </a>
      <a href="#signin">
        <p className="hover:text-lightBlue font-semibold">Sign In</p>
      </a>
    </section>
  );
}
