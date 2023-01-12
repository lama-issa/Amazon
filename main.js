var data = document.getElementById("data");
var subtotal = document.getElementById("subtotal");
var items = [];
var Color = document.getElementById("Color");
var changeimg = document.getElementById("changeimg");
var setimg=document.getElementById("setimg");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var arrimg=document.getElementsByClassName('item');
var lengthitems=arrimg.length;
var slideitem=document.getElementById('changeimg');
var index=0;

if (localStorage.getItem("list") == null) {
    items = [];

}

else {
    items = JSON.parse(localStorage.getItem("list"));//احضار البيانات من اللوكل ستورج وبنخزنهم في اريه
    displaydata();// عشان تظهر البيانات بالجدول اول ما افتح الصفحة حتى بعد اغلاق الصفحة رح تضل محتفظة بالبيانات) 
    //JSON.parse : بحول الى array of object
}

function add(img, price) {
    var obj = {
        em: img,
        p: price
    };


    items.push(obj);
    localStorage.setItem("list", JSON.stringify(items));
    displaydata();

}
function displaydata() {
    var result = "";
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        sum += parseFloat(items[i].p);

        result += `<img src="assets/img/` + items[i].em + `" class="mt-3 w-50" alt=""/><br>
        <span>${"$" + items[i].p}</span>
        <button onclick="del(${i})"  class="btn btn-light"><i class="fa-solid fa-trash text-danger"></i> </button>
        <select  class="select" aria-label="Default select example">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="6">4</option>
        <option value="7">5</option>
        <option value="8">7</option>
        <option value="9">8</option>
        <option value="10">9</option>
        <option value="11">10</option>
      </select>
      <hr></hr>
        `;
    }

    subtotal.innerHTML = `<span class="text-danger">${"$" + sum}</span>` + `<hr></hr>`;

    data.innerHTML = result;


}

//delete
function del(index) {
    items.splice(index, 1);//بروح على الاندكس وبحذف عنصر واحد من الاريه
    localStorage.setItem("list", JSON.stringify(items));//لازم كمان لما احذف من الاريف احذف من اللوكل ستورج
    displaydata();//لازم نحطها عشان تعرض البيانات بعد الحذف لانه اذا ما حطيناها رح تنحذف البيانات لكن رح تضل ظاهرة بالجدول لانه عرضنا البيانات قبل الحذف فقط فلازم نعرض البيانات بعد الحذف كمان مرة 
}

function addcolor(color, imge) {
    Color.innerHTML = "Color: " + color;
    changeimg.setAttribute("src", imge);
    changeimg.setAttribute("alt", "not found");

}
/*
function move(i){
    var r="";
    var arr=["assets/img/amz-bg2.jpg","assets/img/amz-bg3.jpg","assets/img/amz4.jpg"];
        hed.setAttribute("src", arr[i]);
    
    r+=`<i class="fa-solid fa-angle-right"></i>`
    data.innerHTML=r;
}*/
/*start mandress */
function f(img,a,price){


    var data =`<p>${a}</p>
    <p class="text-danger">${price}</p>
    <div class="text-center">
<img src="${img}" alt="" class="w-50 border" />
</div>

<div class="mt-3">
<i class="fa-solid fa-star text-warning"></i>
       <i class="fa-solid fa-star text-warning"></i>
       <i class="fa-solid fa-star text-warning"></i>
       <i class="fa-solid fa-star text-warning"></i>
       <i class="fa-solid fa-star text-muted"></i>
</div>
    `;


    document.getElementById('recipeData').innerHTML=data;
 
}

/*end mandress */

/*start m1*/



prev.addEventListener('click',function(){
    changeimge(index-1) 
  })
  
  next.addEventListener('click',function(){
    changeimge(index +1)
  })
  
  function changeimge(i){//بغير الصورة بناء على الاندكس 
    
    //جمل الاف عشان نعمل حلقة على الاندكس من 0 ل 5 ثم من 5 الى 0
    //5 هي:lengthitems
    //من 0 الى 5:next
    //من 5الى 0 :prev
    if(i>=lengthitems){
      index=0;
    }
    else if(lengthitems<0){
  index=lengthitems-1;
    }
    else{
      index=i;//عشان تتغير قيمة الاندكس كل ما اكبس على prev او next (ما تضل قيمة الاندكس صفر)
    }
 
    let img=arrimg[index].childNodes[1].getAttribute('src');//بجيب الصورة الخاصة بهاد الاندكس
  slideitem.setAttribute('src',img);//بحط هاي الصورة بslideitem

  
  //slideitem.childNodes[1].innerHtml=`${index+1} / ${lengthitems}`;
  
  }
  //عشان لما اكبس من الكيبورد تتغير الصورة
  document.onkeydown=function(e){
    var code=e.keyCode;//بترجع رقم زر الكيبورد الي بكبس عليه
    if(code==39){
      next.click();
    }
    else if(code==37){
      prev.click();
    }
  
  }
  
/*end m1*/