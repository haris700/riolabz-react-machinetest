import { Dispatch } from "redux";
import {
  fetchProductCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "../redux/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Category } from "../utils/types";

function CategoryFilter(props: any) {
  useEffect(() => {
    props.onFetchCategories();
  }, []);
  console.log(props);
  const handleFetchProductsByCategory = (category: string) => {
    if (category === "all") props.onFetchProducts();
    else props.onFetchProductByCategory(category);
  };
  return (
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
      {["all", ...props.productCategories].map((item: string) => {
        return (
          <button
            key={item}
            onClick={() => handleFetchProductsByCategory(item)}
            className="btn btn-outline-dark me-2"
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onFetchCategories: () => {
      dispatch(fetchProductCategories() as any);
    },
    onFetchProductByCategory: (Category: string) => {
      dispatch(fetchProductsByCategory(Category) as any);
    },
    onFetchProducts: () => {
      dispatch(fetchProducts() as any);
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    productCategories: state.product.productCategories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
