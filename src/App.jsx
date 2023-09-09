import { useState } from "react";
import {
  RiHome3Line,
  RiFirefoxLine,
  RiLayoutGridLine,
  RiTeamLine,
  RiLiveLine,
  RiDownload2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine,
  RiArrowRightLine,
  RiArrowRightCircleLine,
  RiArrowLeftCircleLine,
} from "react-icons/ri";

function App() {
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu);

  return (
    <>
      <div className="bg-[#141414] min-h-screen">
        <div
          className={`top-0 fixed w-56 h-full  border-r border-gray-600  transition-all duration-200 p-8 px- flex flex-col justify-between bg-[#141414] lg:left-0 z-50 ${
            showMenu ? "left-0" : "-left-full"
          } `}
        >
          <div>
            {/* logo */}
            <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-6">
              Tu logo
            </h1>
            <ul className="">
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiHome3Line className="" />
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiFirefoxLine className="" />
                  Store
                </a>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiLayoutGridLine className="" />
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiTeamLine className="" />
                  Friends
                </a>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiLiveLine className="" />
                  Live
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiDownload2Line className="" />
                  Downdolad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiSettings3Line className="" />
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors relative"
                >
                  <img
                    src="https://www.latercera.com/resizer/Vgxbx1zLxld_iwt567hS50C3ngo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/VYY2DHHL2VD55K7D52TS4ZSN24.jpg"
                    alt=""
                    className="w-6 h-6 object-cover rounded-full"
                  />
                  <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-[10px] " />
                  User
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden bg-blue-600 text-white fixed bottom-8 right-6 text-lg p-2 rounded-full z-50"
          >
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
        {/* header */}
        <header className=" fixed lg:pl-[248px] w-full flex flex-col md:flex-row  lg:justify-between items-center p-8 gap-4 bg-[#141414] z-40">
          <nav className="flex items-center gap-4 order-1 lg:order-none">
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-full"
            >
              Discover
            </a>
            <a href="#" className="text-gray-500  py-2 px-4 rounded-full">
              Brose
            </a>
            <a href="#" className="text-gray-500  py-2 px-4 rounded-full">
              WishList
            </a>
          </nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-gray-500 text-lg">
                <RiNotification3Line />
              </a>
            </li>
            <li>
              <form action="" className="relative ">
                <RiSearchLine className="text-gray-500 absolute top-3 left-2" />
                <input
                  type="text"
                  className="bg-[#232323] text-gray-300 outline-none py-2 pl-8 pr-4  rounded-full w-full"
                  placeholder="Search"
                />
              </form>
            </li>
          </ul>
        </header>
        {/* content */}
        <main className="lg:pl-[248px] p-8 pt-36 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
            <div className="lg:col-span-5 relative">
              <img
                src="https://images.crazygames.com/games/fortnite/cover-1594746838051.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop"
                alt=""
                className="w-full h-[500px] object-cover rounded-tl-xl rounded-bl-xl"
              />
              <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
                Fornite
              </h1>
              <div className="absolute left-0 bottom-0 p-8 max-w-xl">
                <p className="text-gray-100">Update</p>
                <h2 className="text-4xl text-white font-extrabold mb-4">
                  The hunt is on in Fornite Chapter 2 - season 5: Zeroo Point.
                </h2>
                <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-xl group">
                  Play for Free{" "}
                  <RiArrowRightLine className="group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
            <div className="col-span-1 w-full h-[500px] lg:w-[200px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
              <ul className="p-4 flex flex-col gap-6 h-full overflow-y-scroll">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/rocket-league-caratula.jpg?tf=384x"
                      alt=""
                      className="w-20 h-full object-cover"
                    />{" "}
                    Rocket League
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg"
                      alt=""
                      className="w-20 h-full object-cover"
                    />{" "}
                    Apex Legends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://i.3djuegos.com/juegos/18735/call_of_duty_warzone_2/fotos/ficha/call_of_duty_warzone_2-5769123.jpg"
                      alt=""
                      className="w-20 h-full object-cover"
                    />{" "}
                    Warzone 2.0
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
                      alt=""
                      className="w-20 h-full object-cover"
                    />{" "}
                    Fornite
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* slide videogames */}
          <div className="flex mt-10 mb-6 items-center justify-between w-[95%] ">
            <h5 className="text-gray-500 text-2xl">Games on sale</h5>
            <div className="text-gray-400 text-3xl flex items-center gap-4">
              <RiArrowLeftCircleLine className="cursor-pointer" />
              <RiArrowRightCircleLine className="cursor-pointer text-white" />
            </div>
          </div>
          {/* videogames  */}
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="p-4">
              <img
                src="https://store-images.s-microsoft.com/image/apps.16741.13571084888216164.36662f68-6598-4726-a32e-049a0335e9dc.f56ec01e-40d6-490f-96e5-3188b8f09a5c"
                alt=""
                className="w-full h-72 object-cover rounded-lg mb-2"
              />
              <h3 className="text-gray-300 text-lg">Valheim</h3>
              <p className="text-gray-500 mb-3">Action Games</p>
              <span className="text-white">$8.15</span>
            </div>
            <div className="p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/BioShock_cover.jpg/220px-BioShock_cover.jpg"
                alt=""
                className="w-full h-72 object-cover rounded-lg mb-2"
              />
              <h3 className="text-gray-300 text-lg">Bioshock</h3>
              <p className="text-gray-500 mb-3">Action ,RPG</p>
              <div className="flex items-center gap-2">
                <span className="bg-green-500 px-2 py-1 text-gray-700 rounded-lg">
                  -80%
                </span>
                <span className="text-gray-500">$50</span>
                <span className="text-white">$8.15</span>
              </div>
            </div>
            <div className="p-4">
              <img
                src="https://cdn.atomix.vg/wp-content/uploads/2018/06/Review-Unravel-Two.jpg"
                alt=""
                className="w-full h-72 object-cover rounded-lg mb-2"
              />
              <h3 className="text-gray-300 text-lg">Unravel Two</h3>
              <p className="text-gray-500 mb-3">Adventure Games</p>
              <span className="text-white">$20.38</span>
            </div>
            <div className="p-4">
              <img
                src="https://images.nintendolife.com/66ed3b2a5f5e2/tick-tock-a-tale-for-two-cover.cover_large.jpg"
                alt=""
                className="w-full h-72 object-cover rounded-lg mb-2"
              />
              <h3 className="text-gray-300 text-lg">
                Tick tock A tale for Two
              </h3>
              <p className="text-gray-500 mb-3">Indie Games</p>
              <div className="flex items-center gap-2">
                <span className="bg-green-500 px-2 py-1 text-gray-700 rounded-lg">
                  -60%
                </span>
                <span className="text-gray-500">$3.47</span>
                <span className="text-white">$1.39</span>
              </div>
            </div>
            <div className="p-4">
              <img
                src="https://store-images.s-microsoft.com/image/apps.57087.14561608492674878.d493de47-2fdd-4bb0-b73b-9c36e5003dc7.21562319-881d-4fe0-8eac-f5effe85249a?mode=scale&q=90&h=225&w=150"
                alt=""
                className="w-full h-72 object-cover rounded-lg mb-2"
              />
              <h3 className="text-gray-300 text-lg">Hitman 3</h3>
              <p className="text-gray-500 mb-3">Actions Games</p>
              <span className="text-white">$23.99</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
