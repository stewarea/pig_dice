function Roll() {
  this.total = 0;
}

Roll.prototype.roll = function() {
    var dieRoll = Math.floor(Math.random() * 6) +1;
    //alert("You rolled a " + dieRoll);
    $('#thisroll').text("You rolled a " + dieRoll);
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
  var roll = new Roll();
  $("#rollbutton1 button").click(function() {
    event.preventDefault();
    var Rollbalance = roll.turn();
    $("#score1").html(Rollbalance);
  });
  $("#holdbutton1 button").click(function() {
      var holdnumber = $("#Total1").text() * 1;
        var displaytotal = holdnumber + roll.total;
        $("#Total1").text(displaytotal);
        $("#score1").text(0);
        roll.total = 0;
        if (displaytotal > 10) {
            alert ("Player 1 has won!!!!!!!!!!")
        }
  });
  $("#rollbutton2 button").click(function() {
    event.preventDefault();
    var Rollbalance = roll.turn();
    $("#score2").html(Rollbalance);
  });
  $("#holdbutton2 button").click(function() {
      var holdnumber = $("#Total2").text() * 1;
      var displaytotal = holdnumber + roll.total;
      $("#Total2").text(displaytotal);
        $("#score2").text(0);
        roll.total = 0;
        if (displaytotal > 10) {
            alert ("Player 2 has won!!!!!!!!!!")
        }
  });

});
