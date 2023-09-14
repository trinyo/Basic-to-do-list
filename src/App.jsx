function App() {
  return (
    // main container
    <div className="h-screen p-1  flex flex-row gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
      {/* Side bar */}
      <div className="h-full w-16 backdrop-blur-sm bg-white/80 rounded"></div>
      {/* Right content container */}
      <div className="flex flex-col gap-2 flex-1">
        {/* Top bar */}
        <div className="h-12 w-full rounded backdrop-blur-sm bg-white/80"></div>
        <div className="flex-1 backdrop-blur-sm bg-white/80 rounded"></div>
      </div>
    </div>
  );
}

export default App;
