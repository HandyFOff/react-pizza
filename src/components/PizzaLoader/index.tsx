import ContentLoader from "react-content-loader";

export const PizzaLoader: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"500"}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="1" y="1" rx="12" ry="12" width="100%" height="280" />
      <rect x="1" y="291" rx="8" ry="8" width="100%" height="24" />
      <rect x="1" y="337" rx="12" ry="12" width="100%" height="85" />
      <rect x="1" y="438" rx="12" ry="12" width="100%" height="40" />
    </ContentLoader>
  );
};
