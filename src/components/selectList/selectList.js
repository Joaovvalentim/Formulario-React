import styles from './selectList.module.css';

export default function SelectList({children}){
    return (
        <select className={styles.select}>
            {children}
        </select>
    )
}