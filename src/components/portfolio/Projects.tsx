import React from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useAppStore } from "@/store/appStore";
import { ProjectsEditableWithAuth } from "portfolioui/og-shortlister";

export const Projects = () => {
  const {
    saveProjectAndQualificationInfo,
    portfolio: { projectsInfo, qualificationInfo },
    isLoading,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();
  return (
    <ProjectsEditableWithAuth
      isEditing={isEditing}
      saveProjectAndQualificationInfo={saveProjectAndQualificationInfo}
      projectsInfo={projectsInfo}
      qualificationInfo={qualificationInfo}
      isLoading={isLoading}
      className="bg-background"
      circleClassName="bg-violet-400 dark:bg-violet-400"
      lineClassName="from-violet-700 via-violet-600"
    />
  );
};
