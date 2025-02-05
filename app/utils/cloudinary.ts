import type { CloudinaryImageBody } from "~/types/cloudinary";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

export async function uploadAudioToCloudinary(
  buffer: Buffer,
  folderName: string,
  name: string
) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto", // Cloudinary detectará que es un archivo de audio
          folder: "rc/audio/" + folderName, // Especifica la carpeta en Cloudinary
          filename_override: name,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.secure_url); // Devuelve la URL segura del archivo subido
          }
        }
      )
      .end(buffer); // Pasa el buffer al stream de carga
  });
}
