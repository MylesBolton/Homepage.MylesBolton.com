"use client"
import dynamic from "next/dynamic";
import { MiniChart } from "react-ts-tradingview-widgets";


export const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  }
);


export function TradingVeiwWigets() {
    return (
        <section>
            <div className="grid grid-cols-3 gap-12">
                <MiniChart colorTheme="dark" width="350" dateRange="12M" locale="en" symbol="XAUGBP" ></MiniChart>
                <MiniChart colorTheme="dark" width="350" dateRange="12M" locale="en" symbol="GBPUSD" ></MiniChart>
                <MiniChart colorTheme="dark" width="350" dateRange="12M" locale="en" symbol="GBPEUR" ></MiniChart>
                <MiniChart colorTheme="dark" width="350" dateRange="12M" locale="en" symbol="GBNEGTB" ></MiniChart>
                <MiniChart colorTheme="dark" width="350" dateRange="3M" locale="en" symbol="BTCGBP" ></MiniChart>
                <MiniChart colorTheme="dark" width="350" dateRange="3M" locale="en" symbol="XMRUSD" ></MiniChart>
            </div> 
        </section>
    )
}