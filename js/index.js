$(function () {

    // 
    // Buttons
    // 
    // Simple button
    $('#simpleButton').click(function () {
        alert('Look at index.js to see how to hook these up!')
    })

    // 
    // Sliders
    // 
    // Simple Slider
    var slider = document.getElementById("simpleSlider");
    var output = document.getElementById("simpleSliderOutput");
    output.innerHTML = slider.value; // Display the default slider value

    // Double handle range sliders
    // While they aren't available in simple HTML, they come built in with jQuery UI. 
    


    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        output.innerHTML = this.value;
    }
});