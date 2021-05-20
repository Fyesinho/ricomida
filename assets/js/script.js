$("#enviarCorreo").click(function() {
    alert( "El correo fue enviado correctamente..." );
  });

        $("h2").on( "dblclick", function() {
        $(this).css("color","#C4082B");
  });

  
2
3
4
5
      $( ".clickme1" ).click(function() {
        $( ".desaparecer1" ).toggle( "slow", function() {
          // Animation complete.
        });
      });

      $( ".clickme2" ).click(function() {
        $( ".desaparecer2" ).toggle( "slow", function() {
          // Animation complete.
        });
      });

      $( ".clickme3" ).click(function() {
        $( ".desaparecer3" ).toggle( "slow", function() {
          // Animation complete.
        });
      });