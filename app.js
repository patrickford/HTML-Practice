$(document).ready(function() {

  $('#myForm').submit(function(e) {
    e.preventDefault();
    var myInput = $('#myInput').val();
    $('#myInput').val('');
    $('#myOutput').append('<p>' + myInput + '</p>');
  })

  $('h1').click(function() {
    alert('Something has been clicked');
  })

  $(document).on('click','p', function() {
    alert('Something has been clicked');
  })

})