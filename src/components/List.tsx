import { Card } from "./Card";


export const List = () => {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <h3 className="justify-center">Title</h3>
      <div className="flex flex-col space-y-4 w-full">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
