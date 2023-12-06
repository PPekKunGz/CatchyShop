import Image from "next/image";
import styles from "../styles/page.module.scss";
import Button from "../components/props/Button";
import data from "../../../data/news-shop.json";

export default function NewShop(){
    const shopall = data;
    return(
        <>
        <div className={styles.background}>
        <hr className={styles.hr_mid} data-content="อัพเดทสินค้าใหม่" />
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
                    {/* <Button text={`${data.price} BAHT`} /> */}
                    {data.qty <= 0 ? (<Button text="SOLD OUT"/>):(<Button text={`${data.price} BAHT`} />)}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}