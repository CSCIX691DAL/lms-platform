export default function Login() {
  return (
    <div className="bg-gray-200 h-screen flex">
      <div className="bg-gray-100 lg:w-4/12 md:6/12 w-10/12 m-auto shadow-md rounded-xl">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-bold text-3xl mt-3 text-center text-black">
            LMS Platform
          </h1>
          <form action="" className="mt-6">
            <div className="my-5 text-sm">
              <label for="username" className="block text-black">
                Username
              </label>
              <input
                type="text"
                autofocus
                id="username"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-white w-full"
                placeholder="Username"
              />
            </div>
            <div className="my-5 text-sm">
              <label for="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-white w-full"
                placeholder="Password"
              />
            </div>

            <button className="block font-medium text-center text-white bg-blue-600 p-3 duration-300 rounded-sm hover:bg-blue-500 w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
