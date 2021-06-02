import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    { title: "Số ca đã nhiễm", count: data.Confirmed, type: "confirmed" },
    { title: "Số ca đã khỏi", count: data.Recovered, type: "recovered" },
    { title: "Số ca tử vong", count: data.Deaths, type: "deaths" },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} sx={12} key={item.type}>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
