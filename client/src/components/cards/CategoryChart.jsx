/*import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CategoryChart = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.pieChartData && (
        <PieChart
          series={[
            {
              data: data?.pieChartData,
              innerRadius: 30,
              outerRadius: 80,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          height={300}
        />
      )}
    </Card>
  );
};

export default CategoryChart;*/
/*import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CategoryChart = ({ workouts }) => {
  if (!workouts || workouts.length === 0) return null;

  const categoryCount = workouts.reduce((acc, workout) => {
    const category = workout.category || "Uncategorized";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.entries(categoryCount).map(([label, value]) => ({
    label,
    value,
  }));

  return (
    <Card>
      <Title>Workout Category</Title>
      <PieChart
        series={[
          {
            data: pieChartData,
            innerRadius: 30,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        height={300}
      />
    </Card>
  );
};

export default CategoryChart;*/
import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + "20"};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + "15"};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 24px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CategoryChart = ({ data, innerRadius = 30, outerRadius = 80, height = 360 }) => {
  return (
    <Card>
      <Title>Workout Category</Title>
      {Array.isArray(data?.pieChartData) && data.pieChartData.length > 0 && (
        <PieChart
          series={[
            {
              data: data.pieChartData,
              innerRadius,
              outerRadius,
              paddingAngle: 5,
              cornerRadius: 5,
              label: {
                position: "outside",
                offsetRadius: 24,
                lineLength: 16,
                fontSize: 12,
                fontWeight: "bold",
                maxAngle: 45, // Prevents labels on very thin slices
              },
            },
          ]}
          height={height}
        />
      )}
    </Card>
  );
};

export default CategoryChart;


