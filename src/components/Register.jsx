const Register = () => {
  return (
    <div className="container flex justify-center font-serif text-center">
      <div className="rounded shadow w-80 p6">
        <h2 className="tex``t-xl-center mb-4">Welcomee</h2>
        <form>
          <div className="mb-4">
            <label className="block font-medium text-black text-sm-center">
              Email
            </label>
            <input
              type="email"
              className="px-3 py-3 rounded-sm shadow-sm box-border-black w-15 focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-black text-sm-center">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-3 py-3 border-gray-700 rounded w-15 focus:outline-none focus:border-blue-700"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-3 text-white bg-purple-400 rounded w-15 hover:bg-purple-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
