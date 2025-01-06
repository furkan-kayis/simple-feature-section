import FeatureCard from "./FeatureCard";
import ThemeSwitch from "./ThemeSwitch";

const items = [
  {
    title: "Collect Feedback at Multiple Touchpoints",
    content:
      "Provide a comprehensive understanding of the customer experience.",
    image: {
      src: "/photo_2.png",
      alt: "Four men having a professional conversation near large windows.",
    },
    emoji: {
      content: "✋",
      color: "bg-orange-100",
    },
  },
  {
    title: "Ask Targeted and Specific Questions",
    content:
      "Avoid vague or open-ended questions that may not yield actionable insights.",
    image: {
      src: "/photo_1.png",

      alt: "A man speaking into a microphone during a panel discussion.",
    },
    emoji: {
      content: "🥅",
      color: "bg-blue-100",
    },
  },
  {
    title: "Prioritize and Respond to Feedback",
    content:
      "Communicate the changes or improvements you've made in response to their feedback.",
    image: {
      src: "/photo_3.png",

      alt: "A man in a suit giving a speech, with two others seated behind him.",
    },
    emoji: {
      content: "💬",
      color: "bg-rose-100",
    },
  },
];

export default function App() {
  return (
    <main className="min-h-screen px-4 pb-12 text-gray-800 pt-14 font-outfit bg-background-image dark:bg-custom-gray-900 dark:text-custom-gray-200">
      <ThemeSwitch />
      <div>
        <div className="space-y-2 text-center">
          <h1 className="font-semibold text-[2.5rem] sm:max-w-[18ch] mx-auto">
            Quality feedbacks for your SaaS products
          </h1>
          <p className="text-gray-700 dark:text-custom-gray-400">
            The blocks & components you need
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-12 mx-auto mt-12 w-fit">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </main>
  );
}
