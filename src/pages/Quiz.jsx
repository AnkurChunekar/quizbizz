export const Quiz = () => {
  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto mt-8 px-2">
      <div className="text-2xl">
        Question <span className="text-3xl">06</span>
        <span className="text-gray-400">/20</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        temporibus delectus inventore minima itaque maxime cupiditate veritatis
        consectetur rerum laboriosam neque omnis sed vero ut vel atque sit.
        Illum, nisi.
      </p>

      <div className="flex flex-col gap-4">
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
      <div className="flex justify-between">
        <button className="hover:text-red-500 text-lg">Quit Quiz</button>
        <button class="text-white bg-primary hover:bg-blue-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
          Next Question
        </button>
      </div>
    </div>
  );
};
