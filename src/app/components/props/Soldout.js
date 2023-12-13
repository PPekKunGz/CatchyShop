import styles from '../../styles/components/props/soldout.module.scss';

export default function Soldout(props){
    const { text, icon } = props;

    return(
        <>
        <div className={styles.Btn}>
            <div className={styles.text}>{text}</div>
        </div>
      </>
    )
}