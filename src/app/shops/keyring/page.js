import Image from "next/image";
import styles from "../../styles/page.module.scss";
import data from "../../../../data/shop-keyring.json";
import Button from "../../components/props/Button";
import Footer from "@/app/components/layouts/Footer";

export const metadata = {
  title: "พวงกุญแจ | CatchyShop",
  description: "CatchyShop",
};

export default async function Home() {
  const shopall = data;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <div className={styles.background}>
        <hr className={styles.hr_mid} data-content="พวงกุญแจ" />
        <div className={styles.container}>
          {shopall.map((data, index) => (
            <div key={index}>
              <div className={styles.card}>
                <div className={styles.imgBx}>
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={250}
                    height={250}
                  />
                  <h2>{data.name}</h2>
                  <a href={data.url} target="_blank" rel="noreferrer">
                    {/* <Button text={"asdasd" + data.price}/> */}
                    <Button text={`${data.price} BAHT`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}
