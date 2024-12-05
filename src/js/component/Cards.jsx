import React from "react";
import CardTitle from "./CardTitle";

const Cards = () => {
  const cardsInfo = [
    {
      title: "Disfruta del Caribe",
      image: "https://picsum.photos/id/16/500/325",
      text: `Explora playas de arena blanca, aguas cristalinas y una
         experiencia inolvidable. Relájate bajo el sol o sumérgete en
         aventuras únicas. ¡El Caribe te espera!`,
      button: "Lo quiero!",
    },
    {
      title: "Cordillera de los Andes",
      image: "https://picsum.photos/id/29/500/325",
      text: `Sumérgete en paisajes majestuosos, montañas imponentes y
            naturaleza pura. Vive la emoción del trekking, la nieve y el aire
            fresco. ¡La Cordillera te espera!`,
      button: "Quiero saber mas!",
    },
    {
      title: "Estocolmo",
      image: "https://picsum.photos/id/288/500/325",
      text: `Canales encantadores, arquitectura histórica y la vibrante cultura
            escandinava te esperan. Paseá por calles adoquinadas, disfrutá de
            la gastronomía nórdica y viví la esencia de esta ciudad única.
            ¡Comprá tu pasaje y descubrí Estocolmo!`,
      button: "Quiero!",
    },
    {
      title: "New York",
      image: "https://picsum.photos/id/299/500/325",
      text: `La ciudad que nunca duerme te espera con su energía vibrante.
            Rascacielos imponentes, arte en cada esquina y sabores del mundo
            entero. Paseá por Central Park, viví el Times Square y sentí el
            ritmo de la Gran Manzana. ¡Nueva York te llama, vení a vivirla!`,
      button: "Quedan pasajes?",
    },
  ];

  return (
    <div className="col-md-10 container fluid">
    <div className="row row-cols-1 g-4 mb-4 text-center mb-4 mt-3">
      {cardsInfo.map((card, index) => (
        <div className="col-3" key={index}>
          <CardTitle
            title={card.title}
            image={card.image}
            text={card.text}
            button={card.button}
          />
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Cards;
