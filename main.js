$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict_fert',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                //console.log(Object.values(data));
                //console.log(data.slice(1, 6));
                $('#result').text("Result:" + data[0]);
                // $('#result').css("position", "fixed")
                $('#result').css("top", "75%")
                $('#result').css("left", "35.5%")
                document.querySelector(".values").innerHTML = data.slice(1, 6);
              //  $('#result').text();
                console.log('Success!');
            },
        });
    });

    // Predict yield
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict_crop',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                //console.log(Object.values(data));
                //console.log(data.slice(1, 6));
                $('#result').text("Result:" + data[0]);
                // $('#result').css("position", "fixed")
                $('#result').css("top", "75%")
                $('#result').css("left", "35.5%")
                document.querySelector(".values").innerHTML = data.slice(1, 6);
              //  $('#result').text();
                console.log('Success!');
            },
        });
    });

});