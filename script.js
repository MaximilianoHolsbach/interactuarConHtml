//GENERO LOS OBJETOS QUE SE VERAN EN LA PANTALLA DEL HTML//

const video1 = new Contenido(1,"Talentos ocultos","Película","Drama","Video","https://akamai.sscdn.co/uploadfile/letras/playlists/d/8/1/9/d819076285a24522a2a923f1883056af.jpg")
const video2 = new Contenido(2,"Encanto","Película","Animados","Video","https://www.quever.news/u/fotografias/m/2022/1/28/f638x638-22675_80842_7630.jpeg")
const video3 = new Contenido(3,"El jardín de bronce","Serie","Policial","Video","https://www.formulatv.com/images/series/posters/1500/1509/dest_1.jpg")
const video4 = new Contenido(4,"ChicagoPD","Serie","Policial","Video","https://indiehoy.com/wp-content/uploads/2020/08/CHICAGO-PD-1.jpg")
const video5 = new Contenido(5,"El Tigre Verón","Serie","Policial","Video","https://fotos.perfil.com/2019/07/12/trim/1280/720/julio-chavez-tigre-veron-0712-755175.jpg")
const video6 = new Contenido(6,"Padre no hay más que uno","Película","Comedia","Video","https://pics.filmaffinity.com/Padre_no_hay_m_s_que_uno-911130707-large.jpg")
const video7 = new Contenido(7,"Secretos de las ballenas","Serie","Documental","Video","https://www.bioenciclopedia.com/wp-content/uploads/2011/11/orca-800.jpg")
const video8 = new Contenido(8,"Planeta hostil","Serie","Documental","Video","https://www.anipedia.net/imagenes/animal-salvaje-el-leon.jpg")
const video9 = new Contenido(9,"Secreto en los océanos","Serie","Documental","Video","https://depor.com/resizer/D6py4rzmh0eUech_Ij6anuKkbnQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/A4NQXIYWWRGCTMFCFKIWGCOLUQ.jpg")
const video10 = new Contenido(10,"La Unidad","Serie","Policial","Video","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/files-2020-04-02-13-06-03-1585833545.jpg")
const video11 = new Contenido(11,"Billy y Mandy","Serie","Animadas","Video","https://es.web.img3.acsta.net/r_1280_720/pictures/14/06/16/13/08/110955.jpg")
const video12 = new Contenido(12,"The Big Bang Theory","Serie","Comedia","Video","https://imagenes.atresplayer.com/atp/clipping/cmsimages01/2021/09/30/D4E89173-B12C-4CAD-B81F-9984EF64CCAE/1280x720.jpg")
const video13 = new Contenido(13,"Ready Player One","Película","Aventura","Video","https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/04/02/Ready-Player-One-Movie-Easter-Eggs.jpg")
const video14 = new Contenido(14,"Trapped","Serie","Policial","Video","https://images-na.ssl-images-amazon.com/images/I/811UFyd8ajL._RI_.jpg")
const video15 = new Contenido(15,"La escalera","Serie","Policial","Video","https://resizer.glanacion.com/resizer/QdPBeYoMGVjJpM9nDgQg9eZtKjg=/1200x800/filters:format(webp):quality(80):focal(787x344:797x334)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/FAJS3AG2OJBLXFBLR2MOJM727E.JPG")
const video16 = new Contenido(16,"Sin límites","Película","Acción","Video","https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ac7452a271f7598fdb4d7f320cc214d772581c0308c78193e0d594fb2c5378ca._RI_V_TTW_.jpg")
const video17 = new Contenido(17,"Brigada A","Serie","Acción","Video","https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/EZYP2ROZIRFADDDT2HP7RY7NYU.jpg")
const video18 = new Contenido(18,"The Dukes of Hazzard","Serie","Acción","Video","https://resizer.glanacion.com/resizer/ueaiIKP9iXWUgbF_TLpJp3l4R0M=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VMH3QHRFLBBLDGHIIRK4QC6IEU.jpg")

//INICIALIZAMOS UN ARRAY PARA TRATAR A TODOS LOS OBJETOS DENTRO DE UN SOLO DATO//

const contenidos = [video1,video2,video3,video4,video5,video6,video7,video8,video9,video10,video11,video12,video13,video14,video15,video16,video17,video18]

//INICIALIZO LA CONSTANTE DE CONTENIDOS PARA CARGAR LOS DATOS EN EL HTML//

const divContenidos = document.getElementById("divContenidos")

contenidos.forEach(contenido =>{//Itero los datos del array y les asigno un lugar
    divContenidos.innerHTML +=`
        <div class="contenidos">
            <div class="img">
                <img src="${contenido.img}"class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contenido.nombre}</h5>
                    <p class="card-text">${contenido.categoria}</p>
                    <a href="#" class="btn btn-primary">Agregar</a>
                </div>
            </div>
        </div>
    `
})
