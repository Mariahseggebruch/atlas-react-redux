import { CardProps, ListProps } from "../slices/listsSlice"; // Assuming you have this file
import { useAppSelector, RootState } from "../store";
import { NewCardForm } from "./NewCardForm";
import { Card } from "./Card";

export const List = ({ id, title }: ListProps) => {

  // this isn't working yet 

  return (
    <div className="group/list h-full min-w-96 p-4 ">
      <h3 className="justify-center">{title}</h3>
      <div className="flex flex-col space-y-4 w-full">
        {/* {cards.map((card: CardProps) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))} */}
        <NewCardForm listId={id}  />
      </div>
    </div>
  );
};
