function notTriangle(sideA, sideB, sideC) {
  if ((sideA + sideB <= sideC) || (sideB + sideC <= sideC) || (sideA + sideB <= sideB)) {
    return true;
  } else {
    return false;
  }
}

function equilateralTriangle(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    return true;
  } else {
    return false;
  }
}

function isoscelesTriangle(sideA, sideB, sideC) {
  if (sideA === sideB) || (sideB === sideC) || (sideA === sideC) {
    return true;
  } else {
    return false;
  }
}

function scaleneTriangle(sideA, sideB, sideC) {
  if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
    return true;
  } else {
    return false;
  }
}

$(".equal").hide();
$(".isos").hide();
$(".scale").hide();
$(".not-triangle").hide();
$(document).ready(function() {

  $("#triangleform").submit(function(event) {
    event.preventDefault();

    var sideA = $("#a").val();
    var sideB = $("#b").val();
    var sideC = $("#c").val();

    if (notTriangle(sideA, sideB, sideC) === true) {
      $(".not-triangle").show();
    } else if (equilateralTriangle(sideA, sideB, sideC) === true) {
      $("equal").show();
    } else if (isoscelesTriangle(sideA, sideB, sideC) === true) {
      $("isos").show();
    } else {
      $("scale").show();
    }





  });
});
