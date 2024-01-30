let weatherAPIObj = {

getCurrent: // WARNING: For GET requests, body is set to null by browsers.
/*function(callBack){
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    callBack(this.responseText);
  }
});

xhr.open("GET", `http://api.weatherapi.com/v1/current.json?key=ed6c3c62b6b9485ebf9152400243001&q=london&aqi=yes`);

xhr.send();
},*/
async function(city){
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  
    try {  
     let  acquiredAPI = await fetch(`http://api.weatherapi.com/v1/current.json?key=ed6c3c62b6b9485ebf9152400243001&q=${city}&aqi=yes`, requestOptions)
        .then(response => response.text())
        return acquiredAPI
    } catch (error) {
        console.log("Hata!", error);
    }
},

getForecast: async function(city){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      
        try {  
         let  acquiredAPI = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ed6c3c62b6b9485ebf9152400243001&q=${}&days=${}&aqi=yes&alerts=yes`, requestOptions)
            .then(response => response.text())
            return acquiredAPI
        } catch (error) {
            console.log("Hata!", error);
        }
    },


}

addEventListener("DOMContentLoaded", async function(){
 let acquiredAPI = await weatherAPIObj.getCurrent("ankara")
console.log(JSON.parse(acquiredAPI))
})