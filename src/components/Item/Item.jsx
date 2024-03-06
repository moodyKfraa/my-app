/* eslint-disable react/prop-types */
import styles from './styles.module.css'

function Item({note,ind , deleteNote}) {
  return (
    <div className={styles.item} onClick={()=>deleteNote(ind)}>
        <p>{note}</p>
    </div>
  )
}

export default Item