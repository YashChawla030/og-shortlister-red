"use client";
import React from "react";

import { usePortfolioStore } from "@/store/usePortfolioStore";

import { HeroEditableWithAuth } from "portfolioui/og-shortlister";
import { useAppStore } from "@/store/appStore";

export const Hero = () => {
  const {
    portfolio: { heroInfo },
    isLoading,
    saveHeroInfo,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();

  return (
    <HeroEditableWithAuth
      isEditing={isEditing}
      meteorHeadClassName="bg-violet-500"
      meteorTailClassName="bg-gradient-to-r from-violet-500 to-transparent"
      sparklesLightClassName="bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      sparklesParticleColor="#8b5cf6"
      heroInfo={heroInfo}
      saveHeroInfo={saveHeroInfo}
      isLoading={isLoading}
    />
  );
};
