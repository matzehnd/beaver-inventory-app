import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProductCard: React.FC<{ name: string; stock: number }> = ({
  name,
  stock,
}) => {
  return (
    <Card sx={{ minWidth: 200, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{stock} Stück</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
