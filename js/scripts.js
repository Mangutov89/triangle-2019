

$(document).ready(function() {
  $(".equal").hide();
  $(".isos").hide();
  $(".scale").hide();
  $(".not-triangle").hide();

  $("#triangleform").submit(function(event) {
    event.preventDefault();

    var sideA = $("#a").val();
    var sideB = $("#b").val();
    var sideC = $("#c").val();


    if ((sideA + sideB) >= sideC) {
      $(".random").show();
    } else if ((sideA + sideC) >= sideB) {
        $(".random").show();
    } else if ((sideB + sideC) >= sideA) {
      if (sideA === sideB === sideC) {
        $(".equal").show();
      } else if (sideA === sideB) {
        $(".isos").show();
      } else if (sideB === sideC) {
        $(".isos").show();
      } else if (sideA === sideC) {
        $(".isos").show();
      } else if (sideA != sideB =! sideC) {
        $(".scale").show();
      }
    } else {
      $(".not-triangle").show();
    }






  });
});
