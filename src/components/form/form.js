import styles from './form.module.css';

export default function FormModel({children}){
    return (
        <form>
            {children}
        </form>
    )
}