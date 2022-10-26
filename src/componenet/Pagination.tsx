import Pagination from "react-bootstrap/Pagination";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { paginateProducts } from "../redux/actions";

const LIMIT = 3;
const paginationItem = (
  length: number,
  handlePagination: (limit: number, offset: number) => void
) => {
  const pages = Math.ceil(length / LIMIT);
  const items = [];
  for (let index = 1; index <= pages; index++) {
    items.push(
      <Pagination.Item
        key={index}
        onClick={() => handlePagination(index * LIMIT - LIMIT, index * LIMIT)}
      >
        {index}
      </Pagination.Item>
    );
  }
  return items;
};

function PaginationComponent(props: any) {
  return (
    <Pagination
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {paginationItem(props?.products?.length, props.onPaginate)}
    </Pagination>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onPaginate: (limit: number, offset: number) => {
      dispatch(paginateProducts(offset, limit));
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    products: state.product.productCopy,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);
