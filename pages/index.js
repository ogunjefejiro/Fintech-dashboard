import Head from "next/head";
import Activity from "../components/dashboard/Activity";
import PageLayout from "../components/dashboard/layout/PageLayout";
import QuickLinks from "../components/dashboard/QuickLinks";
import WalletCards from "../components/dashboard/WalletCards";

export default function Home() {
  return (
    <PageLayout name="dashboard">
      <div className="flex flex-col gap-8">
        <WalletCards />
        <QuickLinks />
        <Activity />
      </div>
    </PageLayout>
  );
}
