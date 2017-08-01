<input type="button" onclick="location.href='login.html';" value="Login" 
display: inline />
<input type="button" onclick="location.href='signup.html';" value="Sign Up"display: inline />
.uploadphoto {

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
window.previewFile = previewFile;
