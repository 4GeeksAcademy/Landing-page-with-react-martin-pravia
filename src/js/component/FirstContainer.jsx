import React from "react";

const FirstContainer = ({ title, description, button, photo }) => {

  const slides = [
    { title: "Vení a recorrer el mundo!",
      description:"¡Vuela hacia tus sueños! Descubre paisajes de ensueño, sabores exóticos y aventuras inolvidables. Con nosotros, cada viaje es magia pura. Vive emociones únicas, crea recuerdos eternos. ¡Tu mejor viaje empieza aquí, porque mereces lo extraordinario!",
      button: "Quiero saber mas!",
      photo: "https://picsum.photos/id/420/1900/400"
    },
    { title: "Tu viaje al alcance de un click!",
      description:"¡Escapa hacia la aventura! Explora culturas fascinantes, sabores únicos y paisajes impresionantes. Con nosotros, cada viaje es una historia que contar. Haz tus sueños realidad, ¡vivirás momentos inolvidables! ¡El viaje que siempre soñaste está al alcance de tu mano!",
      button: "Quiero ver mas!",
      photo: "https://picsum.photos/id/501/1900/400"
    },
    { title: "Listo para viajar?",
      description:"¡Haz realidad tu aventura! Sumérgete en destinos exóticos, maravillas naturales y experiencias sorprendentes. Con nosotros, cada viaje es una experiencia única. Crea recuerdos inolvidables, ¡el mundo te espera! Prepárate para la aventura que mereces.",
      button: "Estoy listo!",
      photo: "https://picsum.photos/id/521/1900/400"
    },

]
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <img
            src={slide.photo}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-dark fw-bold">{slide.title}</h3>
            <p className="text-black fw-bold">{slide.description}</p>
            <button type="button" className="btn btn-dark">{slide.button}</button>
          </div>
        </div>
        ))}
        
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FirstContainer;
