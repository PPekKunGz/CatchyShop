import Link from "next/link";
import styles from "./styles/notfound.module.scss";
export default function NotFound() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        <div className={styles.title}>
          <span>ไม่พบหน้าเพจที่คุณ</span>
          <span className={styles.underline}>ค้นหา</span>
        </div>
        <div className={styles.image}>
          <img src="/image/blind.png" alt="Not Found" />
        </div>
      </Link>
    </div>
  );
}
