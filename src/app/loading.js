import styles from "./styles/notfound.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>กำลังทำการโหลด</span>
        <span className={styles.underline}>ข้อมูล</span>
      </div>
      <div className={styles.image}>
        <img src="/image/creditcard.png" alt="Not Found" />
      </div>
    </div>
  );
}
