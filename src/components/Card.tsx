
export const Card = () => {
  return (
    <div className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>Title</span>
        <div className="flex space-x-2">
        </div>
      </h5>
      <p className="mt-2 text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quidem commodi dolorum, sint quia quod nam quasi repudiandae, sequi a ad aperiam! Ab, temporibus animi ex eaque perspiciatis omnis? Corporis?</p>
    </div>
  );
};
