import axios from "axios";



export const GetData = () => {
    axios.get("https://cors-anywhere.herokuapp.com/https://www.argenprop.com/ph-venta-barrio-flores-hasta-90000-dolares-con-instalacionesgasnatural-y-permitemascotas") 
	.then(({ data }) => {
        const thisDocument = document.createElement('div');
        thisDocument.innerHTML = data;
        const imagesOnDocument = thisDocument.querySelectorAll('.listing__item');
        const mapLocation = thisDocument.querySelector('#map');
        //const latitud = mapLocation.getAttribute('data-lat');
        console.log(imagesOnDocument);        
         imagesOnDocument.forEach((enlace) => 
             console.log(enlace)
        )
    });
}