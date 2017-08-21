"use strict";

   $(document).ready(function(){
      $("#menuBarCog").click(function(){
        $("#menuBar").css({"display": "inline"});
        var d = document.getElementById('menuBar');
        d.style.position = "absolute";
        d.style.right = 0+'px';
        d.style.top = 0+'px';
      });
   });
