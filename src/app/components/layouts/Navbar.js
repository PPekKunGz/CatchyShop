'use client'
import Link from "next/link";
import nav from "../../styles/components/layouts/navbar.module.scss";
import Countdown from '../../components/CountdownTimer'

export default function Navbar() {
  return (
    <navbar className={nav.container}>
      <div className={nav.top_background}>
        <div className={nav.logo}>
          <img src="/image/5thbadge.png" alt="CATCHY LOGO" />
          <p>CATCHYSHOP</p>
        </div>
      </div>
      <div className={nav.news}>
         <span>ALICESSHOP, EESHOP, CATCHYSHOP</span>
         {/* <Countdown /> */}
        
      </div>
      <ul className={nav.navbar}>
        <li>
          <Link href="/">หน้าหลัก</Link>
        </li>
        <li>
          <Link href="/shops/all">สินค้าทั้งหมด</Link>
        </li>
        <li>
          <Link href="/shops/keyring">พวงกุญแจ</Link>
        </li>
        <li>
          <Link href="/contact">ติดต่อ</Link>
        </li>
      </ul>
    </navbar>
  );
}
