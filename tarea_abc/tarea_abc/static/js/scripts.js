function populateForm(carnet){
  const row = document.getElementById(carnet)
  $('#carnet').val(row.cells[0].textContent);
  $('#nombres').val(row.cells[1].textContent);
  $('#apellidos').val(row.cells[2].textContent);
  $('#correoelectronico').val(row.cells[3].textContent);
  $('#fechanacimiento').val(row.cells[4].textContent);
}
$(document).ready(function () {
  var jsonData = {
           "headers": {
               "carnet": "Carnet",
               "nombres": "Nombres",
               "apellidos": "Apellidos",
               "email": "Email",
               "fechaNacimiento": "Fecha de Nacimiento"
      },
      "rows": []
  };
  $.ajax({
      url: "http://127.0.0.1:8000/alumnos/all?format=json",
      method: "GET",
      dataType: "json",
      success: function (newData) {
          jsonData['rows'] = newData;
          $.each(jsonData.rows, function(index, row) {
            var newRow = $("<tr id='"+ row.carnet +"'>");
            newRow.append("<td>" + row.carnet + "</td>");
            newRow.append("<td>" + row.nombres + "</td>");
            newRow.append("<td>" + row.apellidos + "</td>");
            newRow.append("<td>" + row.correoelectronico + "</td>");
            newRow.append("<td>" + row.fechanacimiento + "</td>");
            newRow.append("<td><button id='selBtn' class='tableBtn' onClick=populateForm('"+row.carnet+"')>Select</button></td>");
            $("table.data").append(newRow);
        });
      },
      error: function (xhr, status, error) {
          console.error("Error fetching data:", error);
      }
  });

  const postBtn = document.getElementById('postBtn');
  const putBtn = document.getElementById('putBtn');
  const delBtn = document.getElementById('delBtn');
  const selBtn = document.getElementById('selBtn')
  postBtn.addEventListener('click', () => {
    $('#alumnoForm').submit(function(e){
      e.preventDefault();
      $.ajax({
          url: 'http://127.0.0.1:8000/alumnos/create',
          type: 'post',
          data:$('#alumnoForm').serialize(),
          success:function(){
              location.reload();
              alert("Datos Ingresados");
          }
      });
    });
  });

  putBtn.addEventListener('click', () => {
    $('#alumnoForm').submit(function(e){
      e.preventDefault();
      $.ajax({
          url: 'http://127.0.0.1:8000/alumnos/'+$('#carnet').val(),
          type: 'put',
          data:$('#alumnoForm').serialize(),
          success:function(){
              location.reload();
              alert("Datos Actualizados");
          }
      });
    });
  });

  delBtn.addEventListener('click', () => {
    $('#alumnoForm').submit(function(e){
      e.preventDefault();
      $.ajax({
          url: 'http://127.0.0.1:8000/alumnos/'+$('#carnet').val(),
          type: 'delete',
          success:function(){
              location.reload();
              alert("Datos Eliminados");
          }
      });
    });
  });
});