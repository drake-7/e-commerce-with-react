import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELAYS } from "../../Data/globalVariables";
import { updateState } from "../../Features/productsSlice";
import { random } from "../../Functions/helper";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import SkeletonCards from "../Shared/SkeletonLoaders/SkeletonCards";
import s from "./SearchPage.module.scss";
import SearchProducts from "./SearchProducts";

const SearchPage = () => {
  const { searchProducts, loadingSearchProducts } = useSelector(
    (state) => state.products
  );
  let randomDelay = random(DELAYS);
  const dispatch = useDispatch();

  function updateLoadingState() {
    let timerId;

    if (loadingSearchProducts) {
      timerId = setTimeout(() => {
        dispatch(updateState({ key: "loadingSearchProducts", value: false }));
      }, randomDelay);

      randomDelay = random(DELAYS);
    }

    return () => clearTimeout(timerId);
  }

  useEffect(() => {
    updateLoadingState();
  }, [searchProducts]);

  return (
    <div className="container">
      <main className={s.searchPage}>
        <PagesHistory history={["/", "Results"]} />

        <section className={s.products}>
          {loadingSearchProducts && <SkeletonCards />}
          {!loadingSearchProducts && <SearchProducts />}
        </section>
      </main>
    </div>
  );
};
export default SearchPage;
