export const Hero = () => {
  return (
    <header className="h-72 mt-4 text-center gap-6 rounded-xl bg-gradient-to-b from-japanese-indigo to-dark-gunmetal flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold" >Awesome Quizzes for Football Fanatics.</h1>
      <p className="text-gray-300" >It's not How big you are, Its how big you play!</p>
      <button className="bg-primary text-slate-50 py-2 px-4 hover:bg-blue-700 active:scale-95 rounded-md active:scale(0.9)">Take a Quiz Now.</button>
    </header>
  );
};
