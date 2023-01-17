var foodItem = new Array();

setTimeout(allFoods,0);//run a function once at time 0 milliseconds ie., when program starts run the function.

var foods = [
       
    {
        src : "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        Name : "Fries",
        Price : 60,
        Junk : "Yes",
        Calorie : 150,
        Category : "Snacks"
    },
    {
        src : "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm9vZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        Name : "Noodles",
        Price : 150,
        Junk : "Yes",
        Calorie : 200,
        Category : "Snacks"
    },
    {
        src : "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        Name : "Burger",
        Price : 50,
        Junk : "Yes",
        Calorie : 150,
        Category : "Snacks"
    },
    {
        src : "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        Name : "Dosa",
        Price : 90,
        Junk : "No",
        Calorie : 200,
        Category : "Lunch"
    },
    {
        src: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        Name: "Rice",
        Price:120,
        Junk: "No",
        Calorie: 200,
        Category: "Lunch"
    },
{
        src : "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        Name : "Sandwich",
        Price : 100,
        Junk : "No",
        Calorie : 120,
        Category : "B.Fast"
    },
    {
        src : "https://plus.unsplash.com/premium_photo-1663840190865-23876a1a0407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9hc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        Name : "Toast",
        Price : 80,
        Junk : "No",
        Calorie : 120,
        Category : "B.Fast"
    },
    {
        src:"https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJlYWtmYXN0JTIwdmVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        Name:"Brisbane",
        Price:100,
        Junk:"No",
        Calorie:60,
        Category:"B.Fast"
    },
    {
        src:"https://images.unsplash.com/photo-1502747220144-846486e80891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyZWFrZmFzdCUyMHZlZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        Name:"Muesli",
        Price:130,
        Junk:"No",
        Calorie:100,
        Category:"B.Fast"
    },
    {
        src:"https://images.unsplash.com/photo-1649765640770-c0a3961bdc93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGx1bmNoJTIwdmVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        Name:"Vegetables",
        Price:90,
        Junk:"No",
        Calorie:140,
        Category:"Lunch"
    }
  
]

function clearItems(){
    document.getElementById("junk").innerHTML = "";
    document.getElementById("lunch").innerHTML = "";
    document.getElementById("breakfast").innerHTML = "";
    document.getElementById("calorie").innerHTML = "";
    document.getElementById("allItems").innerHTML = "";
}
function junk(){
    clearItems();
    for(var i = 0; i <foods.length; i++){
        item = "item_"+String(i);
        document.getElementById("one").innerText="Junk Items"
        item =`
        <div class="junk_items">
            <img height="120px" style="float:left" width="80px" src="`+foods[i].src+`">
            <ul>
                <li>Name :`+foods[i].Name+`</li>
                <li>Price :`+foods[i].Price+`</li>
                <li>Junk Food :`+foods[i].Junk+`</li>
                <li>Calorie : `+foods[i].Calorie+`</li>
                <li>Category:`+foods[i].Category+`</li>
            </ul>
        </div>`;
        type=foods[i].Junk;
        if(type=="Yes" ){
            console.log(type)
            document.getElementById("junk").innerHTML += item;
        }
    }
}

function lunch(){
    clearItems();
    for(var i = 0; i <foods.length; i++){
        item = "item_"+String(i);
        document.getElementById("one").innerText="Lunch Items"
        item =`
        <div class="junk_items">
            <img height="120px" style="float:left" width="80px" src="`+foods[i].src+`">
            <ul>
                <li>Name :`+foods[i].Name+`</li>
                <li>Price :`+foods[i].Price+`</li>
                <li>Junk Food :`+foods[i].Junk+`</li>
                <li>Calorie : `+foods[i].Calorie+`</li>
                <li>Category:`+foods[i].Category+`</li>
            </ul>
        </div>`;
        cat=foods[i].Category;
        if(cat=="Lunch" ){
            console.log(cat)
            document.getElementById("lunch").innerHTML += item;
        }
    }
}

function breakfast(){
    clearItems();
    for(var i = 0; i <foods.length; i++){
        item = "item_"+String(i);
        document.getElementById("one").innerText="Breakfast Items"
        item =`
        <div class="breakfast_items">
            <img height="120px" style="float:left" width="80px" src="`+foods[i].src+`">
            <ul>
                <li>Name :`+foods[i].Name+`</li>
                <li>Price :`+foods[i].Price+`</li>
                <li>Junk Food :`+foods[i].Junk+`</li>
                <li>Calorie : `+foods[i].Calorie+`</li>
                <li>Category:`+foods[i].Category+`</li>
            </ul>
        </div>`;
        cat=foods[i].Category;
        if(cat=="B.Fast" ){
            console.log(cat)
            document.getElementById("lunch").innerHTML += item;
        }
    }
}


function calorieCheck(){
    clearItems();
    for(var i = 0; i <foods.length; i++){
        item = "item_"+String(i);
        document.getElementById("one").innerText="Calorie Check"
        item =`
        <div class="calorie_items">
            <img height="120px" style="float:left" width="80px" src="`+foods[i].src+`">
            <ul>
                <li>Name :`+foods[i].Name+`</li>
                <li>Price :`+foods[i].Price+`</li>
                <li>Junk Food :`+foods[i].Junk+`</li>
                <li>Calorie : `+foods[i].Calorie+`</li>
                <li>Category:`+foods[i].Category+`</li>
            </ul>
        </div>`;
        cal=foods[i].Calorie;
        if(cal <=150 ){
            console.log(cal)
            document.getElementById("calorie").innerHTML += item;
        }
    }
}

function allFoods(){
    clearItems();
    for(var i = 0; i <foods.length; i++){
        item = "item_"+String(i);
        document.getElementById("one").innerText="All Items"
        item =`
        <div class="all_items">
            <img height="120px" style="float:left" width="80px" src="`+foods[i].src+`">
            <ul>
                <li>Name :`+foods[i].Name+`</li>
                <li>Price :`+foods[i].Price+`</li>
                <li>Junk Food :`+foods[i].Junk+`</li>
                <li>Calorie : `+foods[i].Calorie+`</li>
                <li>Category:`+foods[i].Category+`</li>
            </ul>
        </div>`;
        document.getElementById("allItems").innerHTML += item;
    }
}