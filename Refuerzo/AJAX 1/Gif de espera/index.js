window.onload = () => {
  div = document.getElementById("midiv");

  div.addEventListener("click", loadDoc);

}

function loadDoc(e) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      document.getElementById("gif").style.visibility = "visible";

      setTimeout(() => {
        e.target.innerHTML = this.responseText;
        document.getElementById("gif").style.visibility = "hidden";
      }, 5000)
      
    }
  }
  xhttp.open("GET", "ajax.php", true);
  xhttp.send();
}