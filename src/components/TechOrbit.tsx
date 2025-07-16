import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg"
import javascript from "../assets/javascript.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import node from "../assets/node.svg";
import postgresql from "../assets/postgresql.svg";
import mongodb from "../assets/mongodb.svg";

const icons = [react, tailwind, javascript, html, css, node, mongodb, postgresql];

export default function TechOrbit() {
   return (
    <div className="relative w-64 h-64 mx-auto animate-spin-slow">
      {icons.map((icon, i) => {
        const angle = (360 / icons.length) * i;
        const x = 100 * Math.cos((angle * Math.PI) / 180);
        const y = 100 * Math.sin((angle * Math.PI) / 180);

        return (
          <img
            key={i}
            src={icon}
            alt="tech"
            className="absolute w-16 h-16 animate-spin-reverse"
            style={{
              top: `calc(50% + ${y}px - 32px)`,
              left: `calc(50% + ${x}px - 32px)`,
            }}
          />
        );
      })}
    </div>
  );
}