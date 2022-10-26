import { useEffect, useState } from "react";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import CategoryFilter from "../componenet/CategoryFilter";
import PaginationComponent from "../componenet/Pagination";
import { fetchProducts, searchProducts } from "../redux/actions";

function Home(props: any) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleChange = (e: any) => {
    setSearchKeyword(e.target.value);
  };
  useEffect(() => {
    props.onFetchProducts();
  }, []);

  console.log(props);

  return (
    <div>
      <CategoryFilter />
      <h3 className="text-left mb-3">Search your products</h3>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="search products"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => props.onSearch(searchKeyword)}
        >
          Button
        </Button>
      </InputGroup>

      <h3>Hey Your Products!</h3>
      {/* <Products /> */}
      {props?.products.map((item: any) => (
        <div key={item.id} className="d-inline-flex">
          <Card className="m-2 p-3 h-100" style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "15rem" }}
              className="p-2"
              variant="top"
              src={item?.image}
            />
            <Card.Body>
              <Card.Title>{item?.title?.substring(0, 20)}</Card.Title>
              <Card.Text>$:{item?.price}</Card.Text>
              <h5>rating:{item?.rating?.rate}</h5>
              <Link to={`/product/${item.id}`}>
                <Button variant="primary"> View</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}

      <PaginationComponent />
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onFetchProducts: () => {
      dispatch(fetchProducts() as any);
    },

    onSearch: (keyword: string) => {
      dispatch(searchProducts(keyword));
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
