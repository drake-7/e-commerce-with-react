import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updateState } from "../../../Features/globalSlice";
import s from "./ProductPreview.module.scss";

const ProductPreview = ({ data, handleZoomInEffect }) => {
  const { previewImg } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { img, name, otherImages } = data;
  const [searchParams, _] = useSearchParams();
  const hasOtherImages = otherImages?.length !== 0 && otherImages;

  function setZoomInPreview(value = false) {
    dispatch(updateState({ key: "isZoomInPreviewActive", value: value }));
  }

  function setPreviewImg(img) {
    dispatch(updateState({ key: "previewImg", value: img }));
  }

  useEffect(() => {
    setPreviewImg(img);
  }, [searchParams]);

  return (
    <section className={s.images}>
      {hasOtherImages && (
        <div className={s.otherImages}>
          {otherImages.map((img, i) => (
            <div
              key={i}
              className={s.imgHolder}
              onClick={() => setPreviewImg(otherImages[i])}
            >
              <img src={img} alt="product's image" />
            </div>
          ))}
        </div>
      )}

      <div className={s.previewImgHolder}>
        <img
          src={previewImg}
          alt={name}
          onMouseMove={handleZoomInEffect}
          onMouseEnter={() => setZoomInPreview(true)}
          onMouseLeave={() => setZoomInPreview(false)}
        />
      </div>
    </section>
  );
};
export default ProductPreview;
