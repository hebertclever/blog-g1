const Navbar = () => {
  return (
    <nav className="flex items-center	w-[100%] justify-between px-[20px] max-w-[1100px] mx-[auto] pt-[10px]">
      <img
        src="./blog-logos_transparent.png"
        width="60"
        height="70"
        alt="logo"
      />
      <a className="bg-[#F2F4FC] rounded-[50px] px-[20px] py-[7px]" href="#">sign in</a>
    </nav>
  );
};

export default Navbar;
