import { useState } from "react"
import s from './searchBar.module.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({searchPics}) {
    const [searchName, setsearchName] = useState('');


const handleSearch = event => {
    event.preventDefault()

if (searchName.trim() === '') {  
     toast.error("enter search immage")
    return
}
   searchPics(searchName)  //передали в апп pokemonName-имя пропса!!!!!!
   setsearchName(' ')

}
    return(
<header className={s.Searchbar}>  
<form className={s.SearchForm} onSubmit={handleSearch} >
    <button type="submit"  className={s.SearchFormButton}>
      <span className={s.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={s.SearchFormInput}
      type="text"
      // autocomplete="off"
      // autofocus = "on"
      placeholder="Search images and photos"
      value = {searchName}
      onChange = {event=>{setsearchName(event.target.value.toLowerCase())}}
    />
  </form>
</header>
    )


}

