import { joystickThumbnail1, joystickThumbnail2, joystickThumbnail3, joystickThumbnail4 } from "../../Assets/Images/Images";
import styles from "./ProductPreview.module.scss";

const ProductPreview = ({data}) => {
  const {img, name} = data

  return (
    <section className={styles.images}>
      <div className={styles.otherImages}>
        <img src={joystickThumbnail1} alt="" />
        <img src={joystickThumbnail2} alt="" />
        <img src={joystickThumbnail3} alt="" />
        <img src={joystickThumbnail4} alt="" />
      </div>

      <div className={styles.previewImgHolder}>
        <img src={img} alt={name} />
      </div>
    </section>
  );
};
export default ProductPreview;
