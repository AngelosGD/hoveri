import { motion } from "motion/react";
import { HeroRight } from "./HeroRight";

export const Hero = () => {
  return (
    <>
      <section className="flex items-center justify-center p-8 m-6">
        {/* seccion del lado izquierdo (texto) */}
        <div className="w-[55%] pl-32 lg:pl-44">
          <p className="text-sm font-bold ">
            <span className="text-red-500">{"<"}</span>
            Iconos animados para interfaces modernas
            <span className="text-red-500">{"/>"}</span>
          </p>

          <h2 className="text-8xl font-bold font-sans text-black/90 w-[45%]">
            <span className="text-red-500">Iconos </span>que se
            <span className="text-black"> mueven</span> con tus ideas
            <span className="text-red-500">.</span>
          </h2>

          <p className="w-[40%]">
            Una coleccion de iconos seleccionados para dar un poco mas de vida a
            cada interaccion con icono
            <span className="text-red-500">.</span>
          </p>

          {/* seccion de botones (2 botones unno para ver la liberia y otro para ver como son los componentes (codigo)) */}
          <div className="flex gap-6 pt-8">
            <motion.button
              className="group flex h-12 w-40 items-center justify-center gap-2 rounded-3xl bg-rose-500 text-sm font-bold text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.1 }}
            >
              Ver libreria
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </motion.button>

            <motion.button
              className="group flex h-12 w-40 items-center justify-center gap-2 rounded-3xl border-2 border-black/60 text-sm font-bold text-black/60"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.1 }}
            >
              <span className="transition-colors duration-200 group-hover:text-rose-500/80">
                {"</>"}
              </span>
              Ver codigo
            </motion.button>
          </div>
        </div>

        {/* seccion del lado derecho (circulos + cards animadas) */}
        <div className="w-[45%]">
          <HeroRight />
        </div>
      </section>
    </>
  );
};
