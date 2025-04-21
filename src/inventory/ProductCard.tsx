import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

const ProductCard: React.FC<{
  name: string;
  stock: number;
  productId: string;
}> = ({ name, stock, productId }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ minWidth: 200, textAlign: "center" }}
      onClick={() =>
        navigate({
          to: "/products/$productId",
          params: { productId },
        })
      }
    >
      <CardContent>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{stock} Stück</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
