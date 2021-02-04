
   setInterval(setTime,1000)
 

   const CurrHourMinute= document.querySelector('.time');
   const currSecond= document.querySelector('.second');
   const currAmPm= document.querySelector('.ampm');
  
  
   const image=document.querySelector('#image');
   const condition = document.querySelector('#condition');
   const degree = document.querySelector('#degree');
   const temp =document.querySelector('.temperature')
   
   const cityContent = document.querySelector('.city');
   const form = document.querySelector('.form');
   const input = document.querySelector('.input');
  
  
   function setTime()
   {
      var date= new Date();
      var  hour= date.getHours();
      var  minutes = date.getMinutes();
      var second = date.getSeconds();
   
       var ampm= (hour>=12)?'PM':'AM'; 
      hour = hour % 12;
      hour = hour ? hour : 12;
  
      hour=(hour<10)?'0'+hour:hour;
      minutes =(minutes<10)? '0'+minutes : minutes;
      second= (second<10)?'0'+second : second;
  
       CurrHourMinute.textContent=`${hour}:${minutes}`;
       currSecond.textContent= second;
       currAmPm.textContent=ampm;
  
   }
  
   
  
    const weather = async()=>{
     
     var city;
      city= input.value ? input.value : 'new york';
     try{
      const url='https://api.weatherbit.io/v2.0/current?key=681d15ebc9524a5ab66b1a711e8dd64e&city=';
      const response = await axios.get(url+city);
   
      //const imageLink=response.data.current.condition.icon;
     // image.setAttribute('src',imageLink);
      
      const deg= response.data.data[0].temp;
      degree.innerHTML=`${deg}&#xb0 C`;
  
      condition.textContent= response.data.data[0].weather.description;
      
      const countryName= response.data.data[0].country_code;
      const cityName= response.data.data[0].city_name;
      cityContent.innerText =`${cityName}, ${countryName}`;
   
      return response;
  
     }catch(e){
         temp.textContent='City not found! or'
         cityContent.textContent="Network error!";
         console.log('failed!!!!!!!!',e);
      
     }
  }
   
   
  
  form.addEventListener('submit', async(e)=>{
      e.preventDefault();
       weather();
       input.value='';
   });
  
   
  
  setTime();
  weather();//initial values
  
  
    
  
  