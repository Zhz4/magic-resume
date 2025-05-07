"use client";
import { useTranslations } from "next-intl";
const SettingsPage = () => {
  const t = useTranslations();
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight">
          {t("dashboard.settings.title")}
        </h2>
      </div>
    </div>
  );
};

export default SettingsPage;
