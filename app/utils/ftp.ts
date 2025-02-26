import { Client } from "basic-ftp";
import { Readable } from "stream";

export async function uploadToFTP(
  buffer: Buffer,
  filename: string,
  folder: string
) {
  // Crear un cliente FTP
  const client = new Client();

  client.ftp.verbose = true; // Opcional, para debug

  try {
    await client.access({
      host: "cast1.my-control-panel.com",
      user: "radiochi",
      password: "React-117",
      secure: false, // Cambia a `true` si usas FTPS
    });

    // Navega a la carpeta correspondiente
    await client.ensureDir(folder);
    // Convertir el Buffer en un Readable Stream
    const stream = Readable.from(buffer);

    // Subir el archivo usando el Stream
    await client
      .uploadFrom(
        stream,
        `/media/Programas/${folder}/${filename.split(" ").join("_")}`
      )
      .catch((error) => {
        console.error("Error al subir archivo :c ", error);
      });

    console.log("✅ Archivo subido exitosamente por FTP");
  } catch (error) {
    console.error("❌ Error subiendo el archivo por FTP:", error);
    throw new Error("Error al subir el archivo por FTP.");
  } finally {
    client.close();
  }
}
