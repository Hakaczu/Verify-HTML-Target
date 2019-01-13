function verifyTarget(){
    var elements = document.getElementsByTagName("a");
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if(element.getAttribute("target") != "_blank"){
            element.setAttribute("rel", "noopener noreferrer");
        }
    }
}