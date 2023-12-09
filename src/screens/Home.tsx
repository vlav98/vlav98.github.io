import React from "react";
import Hero from "../components/Hero/Hero";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex-1">
      <Hero title={t("title")} subtitle={t("subtitle")}></Hero>
    </div>
  );
};

export default Home;
