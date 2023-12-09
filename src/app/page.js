import Image from "next/image";
import styles from "./styles/page.module.scss";
import data1 from "../../data/shop-keyring.json";
import data2 from "../../data/shop-anyting.json";
import Button from "./components/props/Button";
import Slider from "./components/Slider";
import NewShop from "./components/NewShop";
import Footer from "./components/layouts/Footer";

export const metadata = {
  title: "หน้าหลัก | CatchyShop",
  description: "CatchyShop",
};

export default async function Home() {
  const shopall = [...data1, ...data2];
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <Slider />
      <NewShop /> {/* NEW SHOP */}
      <div className={styles.background}>
        <hr className={styles.hr_mid} data-content="สินค้าของทางร้าน" />
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
