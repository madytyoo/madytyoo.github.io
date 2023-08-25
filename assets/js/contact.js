$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var recaptcha = $("#g-recaptcha-response").val();

        $("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
        if (name == '' || email == '' || subject == '' || message == '') {
            alert("Please Fill Required Fields");
        } else {
            setTimeout(function () { $("#submit").prop('disabled', true); }, 0);
// Returns successful data submission message when the entered information is stored in database.
            $.post("/contact", {
                name: name,
                email: email,
                subject: subject,
                message: message,
                recaptcha: recaptcha
            }, function (data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                $("#submit").hide();
                $("#form")[0].reset(); // To reset form fields on success.
            }).fail(function() {
                $("#returnmessage").append('An error occorred, please try later');
            });
        }
    });
});