import { useParams } from "react-router-dom";
import { Dispatch } from "redux";
import { fetchProduct } from "../redux/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
function ProductDetails(props: any) {
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    props.onFetchProduct(id);
  }, [id]);

  console.log(props.productDetails);

  return (
    <div className="pdetails-card">
      <Card className="text-center">
        <Card.Body>
          <Card.Img
            className="p-2 product-details-img"
            variant="top"
            src={props.productDetails.image}
          />
          <Card.Text>{props.productDetails.title}</Card.Text>
          <Card.Text>{props.productDetails.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onFetchProduct: (id: string) => {
      dispatch(fetchProduct(id) as any);
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    productDetails: state.product.productDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
