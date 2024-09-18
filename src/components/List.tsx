import React, { useState } from "react";
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";
import "../../mockup/output.css";

export interface CardData { // Export the CardData interface
  id: number;
  title: string;
  description: string;
}

export const List: React.FC<ListProps> = ({ title, cards }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="list p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
      {isHovered && <DeleteListButton />}
      <NewCardForm />
    </div>
  );
};
