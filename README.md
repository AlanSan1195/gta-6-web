# GTA VI Landing Page — Efecto Scroll al estilo Rockstar Games

Este proyecto es una landing page inspirada en el sitio oficial de GTA VI de Rockstar Games, replicando el efecto de scroll animado que caracteriza a la web original. Para lograrlo, utilizamos [GSAP (GreenSock Animation Platform)](https://gsap.com/) y su ecosistema de plugins, una de las bibliotecas de animación más potentes y flexibles en JavaScript.

## Tecnologías utilizadas

- [Astro](https://astro.build/) para la estructura del proyecto y renderizado.
- [TailwindCSS](https://tailwindcss.com/) para los estilos.
- [GSAP](https://gsap.com/) para animaciones avanzadas.

## ¿Qué aprendimos de GSAP?

### 1. Importación y registro de plugins
Para aprovechar funcionalidades como el scroll animado, importamos GSAP y registramos los plugins necesarios, por ejemplo:

```js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

**Referencia:** [Registro de plugins en GSAP](https://gsap.com/docs/v3/GSAP/gsap.registerPlugin/)

### 2. Uso de Timeline
GSAP permite crear líneas de tiempo (`gsap.timeline`) para encadenar animaciones y controlar su secuencia:

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.mi-seccion',
    start: 'top center',
    end: 'bottom top',
    scrub: true
  }
});
tl.to('.elemento', { y: 100, opacity: 1, duration: 1 });
```

**Referencia:** [Timeline en GSAP](https://gsap.com/docs/v3/GSAP/Timeline/)

### 3. Parámetros y sintaxis especial
Al encadenar animaciones, GSAP permite controlar la superposición y sincronización usando parámetros como `"-=1"` y `"<"`:

- `"-=1"`: Inicia la animación 1 segundo antes de que termine la anterior, creando solapamiento.
- `"<"`: Inicia la animación al mismo tiempo que la anterior.

Ejemplo:
```js
tl.to('.a', { x: 100, duration: 1 })
  .to('.b', { y: 100, duration: 1 }, '-=0.5') // Comienza 0.5s antes de que termine la anterior
  .to('.c', { opacity: 1, duration: 1 }, '<'); // Comienza junto con la anterior
```

**Referencia:** [Posicionamiento relativo en Timeline](https://gsap.com/docs/v3/GSAP/Timeline/#position-parameter)

### 4. ScrollTrigger
El plugin ScrollTrigger permite vincular animaciones al scroll de la página, logrando efectos como los de Rockstar Games:

```js
gsap.to('.mi-elemento', {
  scrollTrigger: {
    trigger: '.mi-elemento',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true
  },
  y: 200,
  opacity: 1
});
```

**Referencia:** [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## Recursos útiles

- [Documentación oficial de GSAP](https://gsap.com/docs/)
- [Ejemplos de ScrollTrigger](https://codepen.io/collection/nVYWZR)
- [Guía de timelines y sincronización](https://gsap.com/resources/)

---

Este proyecto es solo con fines educativos y de inspiración, sin relación oficial con Rockstar Games.
