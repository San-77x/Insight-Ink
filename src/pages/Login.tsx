import { GoalIcon } from "lucide-react";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-pink-100">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
          <div className="w-[800px] p-8">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-2">
              Insight-Ink
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <a
              href="/"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <GoalIcon color="black" />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <a
                href="/"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="/" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button
                type="button"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                LOGIN
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <a href="/" className="text-xs text-gray-500">
                OR SIGN UP
              </a>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
