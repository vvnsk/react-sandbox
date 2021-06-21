import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../common/components/Spinner";
import useFetch from "../../common/hooks/useFetch";
import PageNotFound from "../App/PageNotFound";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{(product as any).name}</h1>
      <p>{(product as any).description}</p>
      <p id="price">${(product as any).price}</p>
      <p>
        <button className="btn btn-primary" onClick={() => navigate("/cart")}>
          Add to cart
        </button>
      </p>
      <img src="https://via.placeholder.com/300" width="300" alt={(product as any).category} />
    </div>
  );
}
