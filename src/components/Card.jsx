export const Card = () => {
  return (
    <div className="w-full">
      <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://goal-quiz-dev.netlify.app/images/champions-league.webp"
          alt="blog"
        />
        <div className="p-2 bg-gray-800 text-center">
          <h2 className="tracking-widest text-xs title-font font-medium mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium mb-3">Champions League Quiz</h1>
          <p className="leading-relaxed mb-3 text-sm text-gray-300">
            Photo booth fam kinfolk cold-pressed sriracha leggings.
          </p>
          <button className="bg-blue-900 text-slate-50 py-2 px-4 hover:bg-blue-700 active:scale-95 rounded-md active:scale(0.9) w-full">
            Attempt Now
          </button>
        </div>
      </div>
    </div>
  );
};
