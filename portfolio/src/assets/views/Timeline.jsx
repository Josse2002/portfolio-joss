import { ItemTimeline } from "../components/item-timeline/ItemTimeline";
export function Timeline() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="text-2xl uppercase tracking-widest text-center my-16 font-semibold">
        Experience and Education
      </h2>
      <ol class="relative border-s border-black w-4/5 lg:w-full">
      <ItemTimeline title="Técnico Vocacional en Desarrollo de Software" description="Obtuve mi título como Técnico Vocacional en Desarrollo de Software en el Colegio Salarrué, donde adquirí conocimientos en algoritmos y lógica computacional."/>
      <ItemTimeline title="Certificación en HTML y CSS3" description="Recientemente completé un curso y obtuve un certificado en HTML y CSS3, fortaleciendo mis habilidades en el desarrollo web y diseño de interfaces."/>
      <ItemTimeline title="Certificación en Java y JRE (Oracle One) - Alura Latam" description="Logré obtener un certificado en Java y Java Runtime Environment (JRE) a través del programa Oracle One en Alura Latam, fortaleciendo mis habilidades en el desarrollo de aplicaciones Java."/>
      <ItemTimeline title="Estudios Universitarios en Ingeniería Informática - UCA El Salvador" description="Actualmente estoy cursando mi carrera en Ingeniería Informática en la Universidad Centroamericana (UCA) de El Salvador, donde estoy adquiriendo conocimientos sólidos en áreas clave de la informática y la tecnología."/>

      </ol>
    </div>
  );
}
