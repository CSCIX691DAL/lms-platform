export default function Login() {
  return (
    <div className="bg-dark-navy-blue h-screen flex">
      <div className="bg-navy-blue lg:w-4/12 md:6/12 w-10/12 m-auto shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium font-bold text-3xl mt-3 text-center text-white">
            LMS Platform
          </h1>
          <h1 className="font-medium text-2xl mt-3 text-center text-white">
            Login
          </h1>
          <form action="" className="mt-6">
            <div className="my-5 text-sm">
              <label for="username" className="block text-white">
                Username
              </label>
              <input
                type="text"
                autofocus
                id="username"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              />
            </div>
            <div className="my-5 text-sm">
              <label for="password" className="block text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
            </div>

            <button className="block text-center text-white bg-purple-900 p-3 duration-300 rounded-sm hover:bg-purple-600 w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
