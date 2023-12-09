"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import data from "../../../data/auth.json";
import styles from "../styles/data-auth.module.scss";

import {
  FacebookIcon,
  Youtube,
  Twitter,
  BadgeCheck,
  Github,
  Database,
  Server,
} from "lucide-react";
import Footer from "../components/layouts/Footer";
const Contact = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const projectData = data;

  const post = async () => {
    var arr = [
      "450711285839953931",
      "930044502071201873",
      "478571494553944064",
      "465465938012274698",
      "554852570330562560",
    ];
    var user = [];
    for (let item of arr) {
      await axios
        .post(`/api/discord_proxy`, { item })
        .then((res) => {
          // setUser(res.data);
          user.push(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
      if (user.length === arr.length) {
        setUser(user);
      }
    }
  };
  useEffect(() => {
    post();

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className={styles.isloadingScreen}>
          <div className={styles.isloader}>
            <Image
              src="https://cdn.discordapp.com/avatars/478571494553944064/a1e117fa3792f9284fadb7f87250c2e2.png"
              width="128"
              height="128"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className={styles.background}>
          <span className={styles.t_desc}>ไม่รู้จะเขียนอะไร</span>
          <div className={styles.container}>
            {user.map((member, index) => (
              <div key={index} className={styles.developer_profile}>
                <div key={member.id} className={styles.profile_card}>
                  <div className={styles.image}>
                    <Image
                      src={`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}`}
                      alt={member.global_name}
                      width={250}
                      height={250}
                      className={styles.image_container}
                    />
                  </div>
                  <div className={styles.text_data}>
                    {/* <span className={styles.name}>
                      @{member?.global_name} <BadgeCheck color="lime" />
                    </span> */}
                    <span className={styles.name}>
                      {projectData[index].name} <BadgeCheck color="lime" />
                    </span>
                    <span className={styles.job}>
                      {projectData[index].about}
                    </span>
                    <span className={styles.since}>
                      หน้าที่ : {projectData[index].since}
                    </span>
                  </div>
                  <div className={styles.media_btn}>
                    <Link
                      href={projectData[index].social_fb}
                      className={styles.link}
                      style={{
                        backgroundColor: "#4267b2",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon />
                    </Link>
                    <Link
                      href={projectData[index].social_tw}
                      className={styles.link}
                      style={{
                        backgroundColor: "#1da1f2",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Twitter />
                    </Link>
                    <Link
                      href={projectData[index].social_yt}
                      className={styles.link}
                      style={{
                        backgroundColor: "#ff0000",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Youtube />
                    </Link>
                    {/* <Link
                      href={projectData[index].social_git}
                      className={styles.link}
                      style={{
                        backgroundColor: "#333",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Contact;
