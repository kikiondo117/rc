import { motion } from "framer-motion";

const logos = [
  "https://res.cloudinary.com/kikis-javascript/image/upload/v1739762201/rc/Patrocinadores/kikis-404_2-removebg-preview_toyx9v.png",
  "https://res.cloudinary.com/kikis-javascript/image/upload/v1739762201/rc/Patrocinadores/kikis-404_2-removebg-preview_toyx9v.png",
  "https://res.cloudinary.com/kikis-javascript/image/upload/v1739762201/rc/Patrocinadores/kikis-404_2-removebg-preview_toyx9v.png",
  "https://res.cloudinary.com/kikis-javascript/image/upload/v1739762201/rc/Patrocinadores/kikis-404_2-removebg-preview_toyx9v.png",
  "https://res.cloudinary.com/kikis-javascript/image/upload/v1739762201/rc/Patrocinadores/kikis-404_2-removebg-preview_toyx9v.png",
];

export function LogoCarousel() {
  return (
    <div className="overflow-hidden bg-transparent py-6 w-full">
      <motion.div
        className="flex space-x-8 items-center"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Duplicamos los logos para efecto infinito */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-16 w-fit"
          />
        ))}
      </motion.div>
    </div>
  );
}
