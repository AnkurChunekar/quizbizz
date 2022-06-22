import { Card } from "./Card";

export const QuizSection = () => {
  return (
    <section  className="p-2">
      <div className="flex justify-between mb-6">
        <h3 className="font-bold text-2xl">Top Quizzes</h3>
        <button>View All</button>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
