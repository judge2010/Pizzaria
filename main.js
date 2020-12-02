menu_list_array=["Chicken Tandoori",
                  "Veg Supreme Pizza",
                  "Paneer Tikka Pizza",
                  "Deulex Veggie Pizza",
                  "Veg Extravaganza Pizza"];
function showMenu(){
    menu_list_array.sort();
    for(var i=0;i<5;i++){
    document.getElementById("Menu").innerHTML += "<li>" + menu_list_array[i] + "</li>";
    }
}
function addToMenu(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = '<section class = "card">';
    for(var i=0;i<menu_list_array.length;i++){
        htmldata = htmldata + '<div class = "card">' +  '<img src = "pizzaImg.png" class="pizzaImgs">' + menu_list_array[i] + '</div>';
    };
    htmldata = htmldata + "</section>";
    document.getElementById("display_addmenu").innerHTML = htmldata;
}