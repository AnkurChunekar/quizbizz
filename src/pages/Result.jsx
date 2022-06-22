const Question = () => {
  return (
    <>
      <p className="text-slate-100">
        <span className="text-lg" >1.</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        temporibus delectus inventore minima itaque maxime cupiditate veritatis
        consectetur rerum laboriosam neque omnis sed vero ut vel atque sit.
        Illum, nisi.
      </p>
      <div className="flex flex-col gap-4 border-b-2 pb-8 border-gray-400">
        <button className="border border-gray-500 text w-fill p-4 rounded-lg  hover:bg-blue-800">
          Are Parellel
        </button>
        <button className="border border-gray-500 text w-fill p-4 rounded-lg  hover:bg-blue-800">
          Are Parellel
        </button>
        <button className="border border-gray-500 text w-fill p-4 rounded-lg  hover:bg-blue-800">
          Are Parellel
        </button>
        <button className="border border-gray-500 text w-fill p-4 rounded-lg  hover:bg-blue-800">
          Are Parellel
        </button>
      </div>
    </>
  );
};

export const Result = () => {
  return (
    <div className="max-w-2xl mx-auto px-2">
      <div className="text-center my-6">
        <p className="text-4xl font-bold my-4">Result</p>
        <p>Final Score: 10 / 50</p>
      </div>

      <div className="flex flex-col gap-10">
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};
