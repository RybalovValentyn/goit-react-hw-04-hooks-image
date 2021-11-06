import React from "react"
import s from './button.module.css'

export default function Button ({loadMore}) {

  // window.scrollTo({
  //   top: (document.documentElement.scrollHeight ),
  //    behavior: 'smooth',
  //  });

return (
  <button onClick = {loadMore} type='button' className= {s.Button}>Load more</button>
)

}