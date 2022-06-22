import { RuleBox } from "../components";

export const Rules = () => {
  return (
    <section class="text-gray-300 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-slate-50 mb-4">
            Quiz Rules
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Make sure you read all the rules given below.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <RuleBox ruleStr="There are a total of 5 questions" />
          <RuleBox ruleStr="Each questions is of 10 points" />
          <RuleBox ruleStr="You get 45 seconds to answer each question" />
          <RuleBox ruleStr="You cannot go back to the previous question." />
        </div>
        <button class="flex mx-auto mt-16 text-white bg-primary hover:bg-blue-800 border-0 py-2 px-8 focus:outline-none rounded text-lg">
          Attempt Now
        </button>
      </div>
    </section>
  );
};
