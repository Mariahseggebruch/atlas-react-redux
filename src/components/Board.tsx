import { useAppSelector } from "../store";
import { List } from "./List";
import { ListProps } from "../slices/listsSlice";


export function Board() {
const lists = useAppSelector((state) => state.lists.lists)
// const cards = useAppSelector((state) => state.cards.cards)
return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
        <div className="flex h-full space-x-4">
            {lists.map((list: ListProps & { id: string }) => (
                <List key={list.id} id={list.id} title={list.title} />
                
            ))}
        </div>
    </div>
);
};
