import type { CloudinaryImageBody } from "~/types/cloudinary";

export async function getImageUrl(folder: string) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${apiKey}:${apiSecret}`).toString("base64"),
    },
    body: JSON.stringify({
      expression: `folder:${folder}`,
    }),
  });

  const data: CloudinaryImageBody = await response.json();

  return data.resources.map((img) => img);
}
