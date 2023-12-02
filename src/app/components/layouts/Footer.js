import Link from "next/link";
import footer from "../../styles/components/layouts/footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={footer.copyright}>
        Copyright &copy; PPekKunGzDev &amp; DimensionStudio, All Rights Reserved.
      </div>
    </>
  );
}
