function convertImage() {
    if (!document.getElementById("input").files[0]) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select an image first!',
            button: 'Ok',
            confirmButtonColor: 'crimson'
        })
        return;
    };
    var input = document.getElementById("input");
    var inputFile = input.files[0];

    var reader = new FileReader();
    reader.onload = function (event) {
        var image = new Image();
        image.src = event.target.result;
        image.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            canvas.getContext("2d").drawImage(image, 0, 0);

            var link = document.createElement("a");
            link.download = "converted.jpg";
            link.href = canvas.toDataURL("image/jpeg", 0.75);
            link.click();
        };
    };
    reader.readAsDataURL(inputFile);
}