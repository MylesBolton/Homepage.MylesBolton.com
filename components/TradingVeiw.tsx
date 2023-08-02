"use client"
import * as React from "react";
import { ColorTheme, DateRange, MiniChart, } from "react-ts-tradingview-widgets";
import { TradingVeiwConfig } from "@/src/TradingVeiw.config";
import dynamic from "next/dynamic";

const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  }
);

export function TradingVeiwWidgets() {
  return (
    <main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {TradingVeiwConfig.map((config, index) => (
        <div key={index as number}>
          <MiniChart
            symbol={config.symbol}
            dateRange={config.dateRange}
            colorTheme={"dark" as ColorTheme}
            autosize={false}
          />
        </div>
      ))}
    </main>
  );
};