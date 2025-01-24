import { events } from "~/utils/events";

export default function Events() {
  return (
    <div className="mx-4 flex flex-col gap-4">
      <h1 className="text-2xl w-fit font-medium">Eventos pasados</h1>

      <h2>Rockstar - Radio Chilanga Live</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {events.map((event) => (
          <img
            key={event.url}
            src={event.url}
            alt={event.alt}
            className="w-60 h-96"
          />
        ))}
      </div>
    </div>
  );
}
