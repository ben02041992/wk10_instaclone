const Login = () => {
  return (
    <div className="container flex justify-center p-10 rounded">
      <div>
        <h2 className="text-center text-purple-500 text-pretty">Login</h2>
        <form>
          <div>
            <label className="block text-center">Email</label>
            <input
              type="email"
              className="block border-gray-700 shadow-sm"
              placeholder="Insert email..."
            />
          </div>
          <div>
            <label className="block text-center">Password</label>
            <input
              id="password"
              className="block border-gray-700 shadow-sm"
              placeholder="Insert Password"
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
