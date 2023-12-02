import admin from "../styles/contact.module.scss";
export const metadata = {
  title: "ติดต่อ | CatchyShop",
  description: "CatchyShop",
};

export default function Contact() {
  return (
    <div className={admin.container}>
      <div className={admin.contents}>
        <div className={admin.social}>
          <h2>AD</h2>
        </div>
        <div className={admin.discord}>
          <iframe
            src="https://ptb.discord.com/widget?id=1172274295104340129&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </div>
  );
}
