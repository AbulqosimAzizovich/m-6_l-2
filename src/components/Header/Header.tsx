const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-5">
        <nav className="flex items-center justify-between h-[61px] border-b-2">
          <ul className="flex items-center gap-x-8">
            <li>
              <a href="#" className="hover:underline">
                Models
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AboutUs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <button className="px-[78px] py-2 rounded-[28px] bg-[#333] text-white active:bg-[#333333b2] duration-200">Buyurtirish</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
