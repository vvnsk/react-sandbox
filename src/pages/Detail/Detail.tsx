import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../common/components/Spinner";
import useFetch from "../../common/hooks/useFetch";
import PageNotFound from "../App/PageNotFound";

export default function Detail(props: any) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sku, setSku] = useState("");
  const { data: product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{(product as any).name}</h1>
      <p>{(product as any).description}</p>
      <p id="price">${(product as any).price}</p>

      <select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
        <option value="">What size?</option>
        {(product as any).skus.map((s: any) => (
          <option key={s.sku} value={s.sku}>
            {s.size}
          </option>
        ))}
      </select>

      <p>
        <button
          disabled={!sku}
          className="btn btn-primary"
          onClick={() => {
            props.dispatch({ type: "add", id, sku });
            navigate("/cart");
          }}
        >
          Add to cart
        </button>
      </p>
      <img src="https://via.placeholder.com/300" width="300" alt={(product as any).category} />
    </div>
  );
}
