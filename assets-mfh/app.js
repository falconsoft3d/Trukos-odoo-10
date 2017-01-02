var links = [
          { link : "http://milink.com",
            descripcion: "Mi descripcion"
          },  
          { link: "http://milink2.com",
            descripcion: "Mi descripcion 2"
          }
        ];

        function plantilla(link, descripcion) {
           return "<li><a href='" + link + "'>" + descripcion + "</a></li>";
        }

        var html_menu = "";
        for (var i = 0; i < links.length; i += 1) {
            html_menu += plantilla(links[i].link, links[0].descripcion);
        }
        html_menu += "";