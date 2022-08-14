particleJS("particles-js",{
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
)