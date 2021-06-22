import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../common/components/Spinner";
import useFetch from "../../common/hooks/useFetch";
import PageNotFound from "../App/PageNotFound";

export default function Detail(props: any) {
  const { id } = useParams();
  const skuRef: any = useRef();
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

      <select id="size" ref={skuRef}>
        <option value="">What size?</option>
        {(product as any).skus.map((s: any) => (
          <option key={s.sku} value={s.sku}>
            {s.size}
          </option>
        ))}
      </select>

      <p>
        <button
          className="btn btn-primary"
          onClick={() => {
            const sku = skuRef.current.value;
            if (!sku) return alert("Select size.");
            props.addToCart(id, sku);
            navigate("/cart");
          }}
        >
          Add to cart
        </button>
      </p>
      <img src={`/images/${(product as any).image}`} alt={(product as any).category} />
    </div>
  );
}
