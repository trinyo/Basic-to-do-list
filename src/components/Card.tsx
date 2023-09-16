function Card() {
  return (
    <div className="flex flex-col bg-slate-100 min-h-[100px] rounded min-w-[300px]">
      <div className="text-3xl font-bold m-2">To do</div>
      <div className="bg-gray-300 opacity-60 rounded m-3 mb-0 h-5"></div>
      <div className="bg-gray-300 opacity-60 rounded m-3 p-1 transition hover:bg-gray-500">
        {" "}
        + New note!
      </div>
    </div>
  );
}

export default Card;
