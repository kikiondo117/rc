import type { Route } from "../+types/home";

import { useState } from "react";
import {
  isRouteErrorResponse,
  useFetcher,
  type ActionFunctionArgs,
} from "react-router";
import invariant from "tiny-invariant";

import { uploadAudioToCloudinary } from "~/utils/cloudinary";
import { ConfettiCustom } from "~/components/molecules/Confetti/Confetti";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const audioFile = formData.get("audio") as File; // 'audio' es el nombre del campo del formulario
  const folder = formData.get("folder");

  invariant(audioFile, "No se proporcionó ningún archivo de audio.");
  invariant(folder, "No se proporcionó ningún folder.");

  // Convierte el archivo en un buffer
  const buffer = await audioFile.arrayBuffer();

  try {
    // Sube el archivo a Cloudinary
    const audioUrl = await uploadAudioToCloudinary(
      Buffer.from(buffer),
      folder as string,
      audioFile.name
    );

    return { audioUrl }; // Devuelve la URL del archivo subido
  } catch (error) {
    console.error("Error subiendo el archivo a Cloudinary:", error);
    throw new Error("Error al subir el archivo.");
  }
}

export default function UploadPage() {
  const fetcher = useFetcher();
  const [error, setError] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSize = 100 * 1024 * 1024; // 100MB en bytes
      if (file.size > maxSize) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  return (
    <div className=" justify-center items-center min-h-[70vh] flex flex-col gap-4">
      <fetcher.Form
        method="post"
        encType="multipart/form-data"
        className="flex flex-col gap-4 w-80 md:w-96 border border-solid border-yellow-500 rounded-lg p-4"
      >
        <label htmlFor="folder" className="text-xl flex flex-col gap-2">
          Selecciona tu programa de radio:
          <select name="folder" id="folder" className="text-base">
            <option value="cinex">Cinex</option>
            <option value="mente">SanaMente</option>
          </select>
        </label>

        <label htmlFor="file" className="flex flex-col gap-2">
          <p className="text-xl">Sube tu programa en formato mp3 o wav:</p>
          <input
            type="file"
            name="audio"
            accept="audio/*"
            required
            onChange={handleFileChange}
          />
          {error && (
            <p className="text-red-500">
              El archivo supera los 100MB. Por favor, sube un archivo más
              pequeño.
            </p>
          )}
        </label>

        <button
          type="submit"
          className={`w-fit bg-blue-500 rounded-md p-2 mx-auto ${
            error && "opacity-50"
          }`}
          disabled={fetcher.state === "submitting" || error}
        >
          {fetcher.state === "submitting" ? "Cargando" : "Subir programa"}
        </button>
      </fetcher.Form>

      {fetcher.state === "submitting" && (
        <p>Se está subiendo el programa, por favor espere unos minutos...</p>
      )}

      {fetcher.data?.audioUrl && (
        <div>
          <ConfettiCustom />
          <p>Audio subido correctamente:</p>
          <audio controls src={fetcher.data?.audioUrl}></audio>
        </div>
      )}
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
