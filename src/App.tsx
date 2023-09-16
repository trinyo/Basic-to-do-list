import Card from "./components/Card";

function App() {
  return (
    // main container
    <div className="h-screen p-1  flex flex-row gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
      {/* Side bar */}
      <div className="h-full min-w-[4rem] backdrop-blur-sm bg-white/80 rounded"></div>
      {/* Right content container */}
      <div className="flex flex-col gap-2 flex-1">
        {/* Top bar */}
        <div className="h-12 w-full rounded backdrop-blur-sm bg-white/80 max-w-[95vw]"></div>
        {/* Bottom container */}
        <div className="flex-1 flex items-start backdrop-blur-sm bg-white/80 rounded gap-2 p-2 overflow-auto max-w-[95vw]">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
