import { Card } from "./Card";
import { NewCardForm } from "./NewCardForm";

export const List = () => {
  return (
    <div className="group/list h-full min-w-96 p-4 text-center">
      <h3 className="justify-center">Title</h3>
      <div className="flex flex-col space-y-4 w-full">
        <Card />
        <Card />
        <Card />
        <NewCardForm />
      </div>
    </div>
  );
};
