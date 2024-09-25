import { List } from "./List";


export function Board() {
    return (
      <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
        <div className="flex h-full space-x-4">
            <List />
            <List />
            <List />
        </div>
      </div>
    );
  };
  