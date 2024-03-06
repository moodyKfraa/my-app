/* eslint-disable react/prop-types */
import { memo } from 'react'
import Styles from './Styles.module.css'
import Item from '../Item/Item'

function ItemBox({Data ,update}) {

  const deleteNote =(ind)=>{
    if(ind >= 0){update("delete",ind)}
    }

  return (
    <div className={Styles.item_box}>
        {Data.map((el,ind)=><Item key={ind} note={el} ind={ind} deleteNote={deleteNote}/>)}
    </div>
  )
}

export default memo(ItemBox)

