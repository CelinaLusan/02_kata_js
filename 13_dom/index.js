// function CambiarColor() {
//     let getLabel = document.getElementById( 'getHeader' )
//     getLabel.style.color = "red";
//     let getMainContainer = document.getElementsByClassName( 'mainContainer' );
//     getMainContainer[0].style.backgroundColor = "blue"
    
    
// }
function paintWithBlue() {
    
    var getMainContainer = document.querySelector('.mainContainer')
    // let getMainContainer = document.getElementsByClassName( 'mainContainer' );
    getMainContainer.forEach(element => {
        element.style.backgroundColor = "blue"
    });
}
//call element by ID
var getLabel = document.getElementById( 'getHeader' )
console.log(getLabel)
//call element by TagName
var getBanner = document.getElementsByTagName( 'h2' )
console.log(getBanner)
//call element by Class Name
var getMainContainer = document.getElementsByClassName( 'mainContainer' );
console.log(getMainContainer)