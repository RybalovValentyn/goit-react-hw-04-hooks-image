import { useState, useEffect} from 'react';
import Preloading from "../loader/Loader"
import ImageGallery from '../imageGalery/ImageGallery'
import Button from '../button/Button'


const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
    LOADMORE: 'load more'
  };
const URL = 'https://pixabay.com/api/?q='
const key = '22353010-e1640ec84a31ac5dbc2cb01be'
export default function API ({imageSearch, imageId}) {
    const [status, setStatus] = useState(Status.IDLE);
    const [modalImgURL, setmodalImgURL] = useState('');
    const [image, setimage] = useState([]);
    const [error, setError] = useState(null);
    const [page, setpage] = useState(1);

    useEffect(() => {
        if (!imageSearch) {
             return;
        }   
        setpage(1)
        setStatus(Status.PENDING);

           setTimeout(() =>{

        fetch(`${URL}${imageSearch}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response=>{ if (response.ok) { return response.json()}
             return Promise.reject( new Error (`not name ${imageSearch}`))})
             .then( image => { 
                 setimage(image.hits)
                 setStatus(Status.RESOLVED)    
})
    .catch(setError( Status.REJECTED))
setStatus(Status.IDLE); },1000)
      }, [imageSearch]);
    


      useEffect(() => {
          if (modalImgURL) {
            imageId(modalImgURL)  
          }
             },[modalImgURL])



     useEffect(() => {
        if (!imageSearch) {
            return;
       }
        if ( page === 1) {
                return;
                  }                       
            setTimeout(() =>{
        
                fetch(`${URL}${imageSearch}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
                    .then(response=>{ if (response.ok) { return response.json()}
                     return Promise.reject( new Error (`not name ${imageSearch}`))})
                     .then( image => {                       
                setimage(img => [...img, ...image.hits] ) 
                    setStatus(Status.RESOLVED) 
                       
    window.scrollTo({
        top: (document.documentElement.scrollHeight ),
         behavior: 'smooth',
       });
   
        })
            .catch(setError( Status.REJECTED))

        setStatus(Status.IDLE);

            },1000)
            
              }, [page]);

    if (status === Status.IDLE) {
        return <></>
    }
    if (status === Status.PENDING ?? image) {
        return <Preloading />
        
    }
    
    if (status === Status.RESOLVED ) {
       return(       
           <>    
     <ImageGallery images={image} imageId ={(imageId)=>setmodalImgURL(imageId)} status={status}/ >
                  
      {status === Status.PENDING && <Preloading />}
    {image.length >= 12 && <Button loadMore= {()=>setpage(page => page +1 )}/>}
    </>

    
     )
    }

    if (status === Status.REJECTED) {
        return <p>{error.message }{imageSearch} нету</p>
    }
    
}