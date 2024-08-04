function Sample() {
    return (
      <>
        <header className="bg-black h-14 text-gray-400 font-mono flex">
          <a href="#" >
            <img src="./src/assets/logo.png" alt="Company Logo" className="h-full ml-5"  />
          </a>
          <nav className="flex items-center">
            <a href="#" className="bg-black  hover:text-gray-100 duration-1000  px-2 py-2 mx-2 my-2 rounded-lg ">Docs</a>
            <a href="#" className="bg-black  hover:text-gray-100  px-2 py-2 mx-2 my-2 rounded-lg ">Components</a>
            <a href="#" className="bg-black  hover:text-gray-100  px-2 py-2 mx-2 my-2 rounded-lg ">Blocks</a>
            <a href="#" className="bg-black  hover:text-gray-100  px-2 py-2 mx-2 my-2 rounded-lg ">Charts</a>
          </nav>
          <div className="group flex ml-auto items-center relative">
            <img className="h-full m-2 p-2 rounded-3xl " src="./src/assets/avatar.jpg" alt="User" />
            <div className="absolute right-0 mt-48 w-48 mr-5 bg-white shadow-lg rounded-lg flex flex-col scale-0 group-hover:scale-100 duration-300 origin-top-right">
              <a href="#" className="px-4 py-2 hover:bg-gray-100 ">Settings</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 ">Profile</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 ">Logout</a>
            </div>
          </div>
        </header>
      </>
    );
  }
  
  export default Sample;