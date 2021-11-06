import ImageItem from '../imageItem/Image.Item'
import s from './imageGallery.module.css'


export default function ImageGallery({images,  imageId}) {

const handleClick = event => {
     if (event.target.currentSrc) { 
   imageId(images.find(hit => hit.webformatURL === event.target.src))
    }}

   return (    
     <ul className={s.ImageGallery} onClick={handleClick}>

   <ImageItem  image = {images}/>

   </ul>   
    

 )
     
    
}

