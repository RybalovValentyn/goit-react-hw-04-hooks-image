import { useState } from "react"
import Searchbar from "./components/searchBar/SearchBar";
import { ToastContainer } from 'react-toastify';
import API from "./components/api/API";
import Modal from "../src/components/modal/Modal";
import s from './components/api/api.module.css';

export default function App() {
  const [searchQuery, setsearchQuery] = useState('');
  const [showmodal, setshowmodal] = useState(false);
  const [modalImgURL, setmodalImgURL] = useState('')

const toggleModal = (imageId) => {
  setmodalImgURL(imageId)
  console.log(imageId);
  setshowmodal(true)
};



  return (
<div className={s.App}>
<Searchbar searchPics = {searchPics=>setsearchQuery(searchPics)}/>
<ToastContainer autoClose={3000} />
<API imageSearch={searchQuery} imageId ={toggleModal} />
  {showmodal && (
      <Modal onClose={()=>setshowmodal(!showmodal)} imageId={modalImgURL}/>)} 

</div>
  );


}


