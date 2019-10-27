$(document).ready( ()=> {
    particlesJS.load('particles-container', '/assets/json/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
      const getParameterByName = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    const name = getParameterByName("to")
    if(name)
        $("#name").text("!!!" + name + "!!!");
    else
        $("#name").remove()
    const from = getParameterByName("from") || "Naman"
    $("#from-name").text("From " + from );

    const isForGrp = getParameterByName("grp");
    // const msg = "";
    // if(isForGrp){

    // }
});