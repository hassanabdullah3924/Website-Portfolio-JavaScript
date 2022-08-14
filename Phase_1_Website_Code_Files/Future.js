/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles" : {
      "number" :{
          "value": 150
      },
      "color": {
          "value": "#fff"
      },
      "shape": {
          "type":"circle",
          "stroke": {
              "width":1,
              "color": "#ccc"
          }
      },
      "polygon": {
          "nb_sides":5
      },
      "opacity": {
          "value":0.5,
          "random": true,
          "anim": {
              "enable": false,
              "speed":0.5
          }
      
      },
      "size": {
          "value": 10,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 5
          }
      },
      "line_linked": {
          "enable": true,
          "distance":120,
          "color":"#FFC0CB",
          "width":1

      },
      "move": {
          "enable": true,
          "speed":2
      }
      },
      "interactivity": {
          "events": {
          "onhover": {
              "enable":true,
              "mode":"repulse"
          },
          "onclick": {
                  "enable":true,
                  "mode":"push"
               }
           },
           "modes": {
               "repulse": {
                   "distance":70
               
               },
               "bubble": {
                   "size": 30
               },
               "remove": {
                   "particles_nb": 2
               }
           }
       },
       "retina_detect": true
  }
);
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  const loader = document.querySelector('.btn');
  const main = document.querySelector('.buttonLoading')