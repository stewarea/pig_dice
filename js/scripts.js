function Roll() {
  this.total = 0;
}

Roll.prototype.roll = function() {
    var dieRoll = Math.floor(Math.random() * 6) +1;
    $('#thisroll').text(dieRoll);
    return dieRoll;
}

Roll.prototype.turn = function() {
    var roll = this.roll();
    if (roll === 1)   {
         this.total = 0;
    } else {
         this.total += roll;
    }
    return this.total;
};


$(document).ready(function() {
  var newroll = new Roll();
  $("#rollbutton1 button").click(function() {
    event.preventDefault();
    var Rollbalance = newroll.turn();
    $("#score1").html(Rollbalance);
  });
  $("#holdbutton1 button").click(function() {
      var holdnumber = $("#Total1").text() * 1;
        var displaytotal = holdnumber + newroll.total;
        $("#Total1").text(displaytotal);
        $("#score1").text(0);
        newroll.total = 0;
        $("#player1").hide();
        $("#player2").show();
        if (displaytotal > 100) {
            alert ("Player 1 has won!!!!!!!!!!")
        }
  });
  $("#rollbutton2 button").click(function() {
    event.preventDefault();
    var Rollbalance = newroll.turn();
    $("#score2").html(Rollbalance);
  });
  $("#holdbutton2 button").click(function() {
      var holdnumber = $("#Total2").text() * 1;
      var displaytotal = holdnumber + newroll.total;
      $("#Total2").text(displaytotal);
        $("#score2").text(0);
        newroll.total = 0;
        $("#player2").hide();
        $("#player1").show();
        if (displaytotal > 100) {
            alert ("Player 2 has won!!!!!!!!!!")
        }
  });

});
