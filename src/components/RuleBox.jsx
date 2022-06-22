export const RuleBox = ({ ruleStr }) => {
    return (
      <div class="bg-gray-800 rounded flex max-w-lg w-full p-4 h-full items-center">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          class="text-primary w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span class="title-font font-medium">{ruleStr}</span>
      </div>
    );
  };
