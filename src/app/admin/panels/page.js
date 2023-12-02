import styles from "../../styles/dashboard/panels.module.scss";
import UploadImage from '../../components/props/Upload_image';
export const metadata = {
  title: "Admin Panels | CatchyShop",
  description: "CatchyShop",
};

export default async function Panels() {
  return (
    <>
      <div className={styles.background}>
        <hr className={styles.hr_mid} data-content="ADMIN DASHBOARD" />
        <div className={styles.container}>
            
            {/* <UploadImage/> */}
        </div>
      </div>
    </>
  );
}
