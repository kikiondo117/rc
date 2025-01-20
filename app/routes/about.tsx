export default function About() {
  return (
    <div className="mx-4 flex flex-col gap-4">
      <h2 className="text-2xl w-fit font-medium">Sobre nosotros</h2>

      <div>
        En Radio Chilanga, nuestra misión es conectar con oyentes dando
        contenido que aporte valor sin importar el lugar desde nos sintonicen,
        de igual manera queremos ofrecer una plataforma donde locutores de todas
        partes pueden unirse a nuestro proyecto sin costo alguno. ¡Únete y
        comparte tu voz!
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src="https://i.imgur.com/0f0u4oG.png" alt="Manue Vera" />
        <div className="flex gap-2">
          <p>Manuel Vera - Director</p>
        </div>
      </div>
    </div>
  );
}
