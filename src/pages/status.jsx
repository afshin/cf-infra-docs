import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import StatusDashboard from "@site/src/components/StatusDashboard";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for conda-forge infrastructure"
    >
      <StatusDashboard />
    </Layout>
  );
}
