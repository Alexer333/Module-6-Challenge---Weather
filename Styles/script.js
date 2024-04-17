// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=32b185969e14080ff8722bf92d5e0495;

console.log("Linked");



function submit(){
    preventDefault();
    const myInput = document.getElementById("myInput");
    localStorage.setItem("myInput");
    city.innerHTML = myInput.value;
    console.log(city);
}

myInput.addEventListener("click", submit);



// area.addEventListener("click", function(event){
//     fetchData(cityPlace);
// })