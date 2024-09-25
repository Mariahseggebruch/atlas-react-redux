// props need to come in with title and description
// use them within the card to render
interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>{title}</span>
        <div className="flex space-x-2">
        </div>
      </h5>
      <p className="mt-2 text-left">{description}</p>
    </div>
  );
};
