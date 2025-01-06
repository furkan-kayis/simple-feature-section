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
    <div className="p-8 bg-gray-100 dark:bg-custom-gray-800 rounded-2xl max-w-[20rem] space-y-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform">
      <span className={`p-2 text-2xl ${emoji.color} rounded-full`}>
        {emoji.content}
      </span>
      <h3 className="text-[1.25rem] font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-custom-gray-300">{content}</p>
      <img
        src={image.src}
        alt={image.alt}
        className="!mt-4 w-full rounded-2xl"
      />
    </div>
  );
}
