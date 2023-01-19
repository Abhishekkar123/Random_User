const icon=document.querySelectorAll(".icon");
const title_detail=document.querySelector(".title_details")
const  title_detail_=document.querySelector(".title_details")
const title_info=document.querySelector(".title");
const info_icon=document.querySelector(".info_icon");
const userImg=document.querySelector(".userImg");

document.querySelector(".refresh").addEventListener("click",function(){
	location.reload();
})


fetch("https://randomuser.me/api").then(function(res){
	data=res.json();
	return data;
}).then(function(data){
      console.log(data)
      let userData=data.results[0];
      let imgSrc=`<img src="${userData.picture.large}">`;
      let name=`${userData.name.first} ${userData.name.last}`;
      let content=`
<div class="icon  user active" data-title="Hi,My name is" data-value=${userData.name.first} ${userData.name.last}></div>
     	<div class="icon  email" data-title="My email address is" data-value=${userData.email}></div>
     	<div class="icon  birthday" data-title="/My Birthday is" data-value=${userData.dob.age}yrs></div>
     	<div class="icon  location" data-title="My Location is" data-value=${userData.location.country}></div>
     	<div class="icon  phone" data-title="My phone is" data-value=${userData.cell}></div>
     	<div class="icon  password" data-title="My password is" data-value=${userData.login.password}></div>
      `

      info_icon.innerHTML=content;
      userImg.innerHTML=imgSrc;
      title_detail_.innerHTML=name;

const icon=document.querySelectorAll(".icon");
const title_detail=document.querySelector(".title_details")
const title_info=document.querySelector(".title");

icon.forEach(function(item){
	console.log(item);
	item.addEventListener("mouseover",function(){
		let data_title=item.getAttribute("data-title")
		let data_value=item.getAttribute("data-value");


		// console.log(data_value);
		// console.log(data_title);

		title_info.innerHTML=data_title;
		title_detail.innerHTML=data_value;



	})

})
})



