function sayHello(){
    const name = document.getElementById("nameInput").value;
    if (name == "Tom") {
        var greeting = "Banned.";
    } else {
        var greeting = "Hello, " + name + "!"
    }
    alert(greeting);
}