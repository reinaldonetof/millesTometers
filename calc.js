$(function() {
  let milhasAnterior;
  let metroAnterior;
  $("#calc").click(function() {
    let milhas = parseFloat($("#milhas").val());
    let metros = parseFloat($("#metros").val());
    if (milhas !== milhasAnterior && !isNaN(milhas)) {
      metros = 1609.344 * milhas;
      $("#metros").val(metros.toFixed(5));
    } else {
      milhas = metros / 1609.344;
      $("#milhas").val(milhas.toFixed(5));
    }
    milhasAnterior = milhas;
    metroAnterior = metros;
  });
});
