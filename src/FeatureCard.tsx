type FeatureCardProps = {
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
  emoji: {
    content: string;
    color: string;
  };
};

export default function FeatureCard({
  title,
  content,
  image,
  emoji,
}: FeatureCardProps) {
  return (
    <div className="py-8 px-6 bg-gray-100 dark:bg-custom-gray-800 rounded-2xl max-w-[20rem] space-y-5 shadow-md hover:shadow-lg hover:-translate-y-2 transition-[transform,box-shadow]">
      <span className={`p-2 text-2xl ${emoji.color} rounded-full`}>
        {emoji.content}
      </span>
      <h3 className="text-[1.25rem] font-semibold leading-tight">{title}</h3>
      <p className="leading-tight text-gray-600 dark:text-custom-gray-300">
        {content}
      </p>
      <img
        src={image.src}
        alt={image.alt}
        className="!mt-4 w-full rounded-2xl"
      />
    </div>
  );
}
