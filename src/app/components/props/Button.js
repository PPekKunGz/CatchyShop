import styles from '../../styles/components/props/button.module.scss';

export default function Button(props){
    const { text, icon } = props;

    return(
        <>
        <div className={styles.Btn}>
            <div className={styles.text}>{text}</div>
        </div>
      </>
    )
}