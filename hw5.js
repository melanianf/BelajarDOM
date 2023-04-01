let arrPeserta = [];

class Peserta {
  constructor(nama, umur, sangu) {
    this.nama = nama;
    this.umur = umur;
    this.sangu = sangu;
  }
}

function openTab(evt, cityName) {
  showTableData();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

async function setAction(form) {
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let sangu = document.getElementById("sangu").value;

  let newPeserta = await new Peserta(nama, umur, sangu);
  await arrPeserta.push({
    nama: newPeserta.nama,
    umur: newPeserta.umur,
    sangu: newPeserta.sangu,
  });
}

function showTableData() {
  var outputHTML = "";
  outputHTML += "<table border='2px' width='400'>";

  outputHTML += "<tr><td>Nama</td> <td>Umur</td> <td>Sangu</td> </tr>";
  console.log(arrPeserta);
  for (let i = 0; i < arrPeserta.length; i++) {
    console.log(arrPeserta[i].nama);
    outputHTML +=
      "<tr><td>" +
      arrPeserta[i].nama +
      "</td>" +
      "<td>" +
      arrPeserta[i].umur +
      "</td>" +
      "<td>" +
      arrPeserta[i].sangu +
      "</td></tr>";
  }

  outputHTML += "</table>";

  document.getElementById("empTable").innerHTML = outputHTML;
}
