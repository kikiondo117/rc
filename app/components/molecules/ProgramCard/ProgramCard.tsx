import { Link } from "react-router";

type ProgramCardProps = {
  title: string;
  days: string;
  time: string;
  tags: string[];
  img: string;
};

export function ProgramCard(props: ProgramCardProps) {
  return (
    <div className="flex h-fit w-[300px] flex-col overflow-hidden rounded-2xl border border-gray-500 dark:bg-white dark:text-black p-4 relative ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="inline-block text-xl font-medium ">{props.title}</p>
          <div className="h-12 w-12 border-b-[1px] border-solid border-black">
            <img
              src={props.img}
              alt="Programa"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between pt-2 pb-4 items-center">
          <p className="text-amber-800 text-sm">
            {props.days} <br /> {props.time}
          </p>
          <Link to={"/"} className="cursor-pointer text-xs underline">
            Más información
          </Link>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 flex gap-4">
        {props.tags.map((tag) => (
          <p className="bg-gray-300 rounded-full p-1 text-xs">{tag}</p>
        ))}
      </div>
    </div>
  );
}
