export default function About() {
  return (
    <div className="mx-4 flex flex-col gap-4">
      <h2 className="text-2xl  font-medium text-center">¡Sobre nosotros!</h2>

      <div className="font-light">
        En Radio Chilanga, nuestra misión es conectar con oyentes dando
        contenido que aporte valor sin importar el lugar desde nos sintonicen,
        de igual manera queremos ofrecer una plataforma donde locutores de todas
        partes pueden unirse a nuestro proyecto sin costo alguno. ¡Únete y
        comparte tu voz!
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          className="w-48 h-48"
          src="https://res.cloudinary.com/kikis-javascript/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1738362754/rc/locutores/feliciano_wifbtq.jpg"
          alt="Manue Vera"
        />
        <div className="flex gap-2">
          <p>Manuel Vera - Director</p>
        </div>
      </div>

      <h3 className="text-2xl w-fit font-medium">Locutores</h3>
    </div>
  );
}
