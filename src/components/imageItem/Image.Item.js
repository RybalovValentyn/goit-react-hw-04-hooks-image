import s from './imageitem.module.css'

export default function ImageItem({image}) {
  return (
    
<>
    {image.map(img => (
      <li key = {img.id} className={s.ImageGalleryItem}>
       <img src={img.webformatURL} alt={img.tags} className={s.ImageGalleryItemImage} />
      </li>
  
    ))}
</>



)}