import { SquidWidget } from "@soulswapfinance/cross-chain-widget";
import { AppConfig } from "@soulswapfinance/cross-chain-widget/widget/core/types/config";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const config = {
    companyName: "SoulSwap Finance",
    integratorId: "soulswap-widget",
    slippage: 1,
    instantExec: true,
    infiniteApproval: false,
    apiUrl: "https://dev.api.0xsquid.com",
    primary: '#821FFF',
    initialFromChainId: 250,
    initialToChainId: 43114,
    style: {
      primary: '#821fff',
      // secondaryContent: '#FFFFFF',
      advanced: {
        transparentWidget: true,
          // secondary: '#FFFFFF'
      }
    },
    availableChains: {
      source: [1, 250, 43114, 10, 42161, 137, 56, 100, 8453, 324, 25, 128, 288, 59144, 66, 42220, 1313161554],
      destination: [1, 250, 43114, 10, 42161, 137, 56, 100, 8453, 324, 25, 128, 288, 59144, 66, 42220, 1313161554]
    },
  } as AppConfig;

  return (
    <div
      // className={styles.container}
      style={{
        display: "grid",
        flexDirection: "column",
        // background: "#2A2A2A",
        // background: "#110E1A",
        background: "#13131B",
        // gridAutoFlow: "row",
        alignItems: "center",
        justifyContent: "center",
        // scale: "100%",
        width: "100%",
        height: "100%",
        // border: "1px solid #821fff",
        // borderRadius: "24px",
        // marginTop: 12,
        // maxWidth: "100%",
        // flexWrap: "nowrap",
        // border: "1px solid #000000",
        // paddingBottom: 24,
      }}
    >
      {/* <Image
        src="https://exchange.soulswap.finance/title-logo-words.png"
        alt="SoulSwap Logo"
        width={440}
        height={100}
          style={{
            border: '2px solid #FFFFFF',
            borderRadius: "10px",
            padding: 12,
          }}
        /> */}
        <SquidWidget
          config={config}
        />
         {/* <a href={'https://app.soulswap.finance'}
        target={'_blank'}
        rel={'noreferrer'}
        
        style={{
          color: '#821FFF',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "12px",
            // marginBottom: "6px",
            border: '1px solid #821FFF',
            borderRadius: "10px",
            // marginLeft: '100px',
            // marginRight: '100px',
            justifyContent: 'center',
          }}
        >
          {'Return to SoulSwap'}
        </div>
      </a> */}

    </div>
  );
}
