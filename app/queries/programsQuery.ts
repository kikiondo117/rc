export const eventsQueries = {
  all: () => ({
    queryKey: ["events"],
    queryFn: () => fetch(`/cloudinary`).then((res) => res.json()),
  }),
};
