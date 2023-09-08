import { SquidWidget } from "@soulswapfinance/cross-chain-widget";
import { AppConfig } from "@soulswapfinance/cross-chain-widget/widget/core/types/config";

// import styles from "../styles/Home.module.css";

export default function Home() {
  const config = {
    companyName: "SoulSwap Finance",
    integratorId: "soulswap-widget",
    slippage: 1,
    instantExec: true,
    infiniteApproval: false,
    apiUrl: "https://dev.api.0xsquid.com",
    primary: '#821fff',
    initialFromChainId: 250,
    initialToChainId: 43114,
    style: {
      primary: '#821fff',
      // secondary: '#FFFFFF',
      advanced: {
        transparentWidget: true
      }
    },
    availableChains: {
      source: [1, 250, 43114],
      destination: [1, 250, 43114]
    },
  } as AppConfig;

  return (
    <div
      // className={styles.container}
      style={{
        display: "grid",
        // background: "#2A2A2A",
        background: "#110E1A",
        // gridAutoFlow: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        border: "1px solid #000000"
      }}
    >
      <a href={'https://app.soulswap.finance'}
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
            // marginTop: "-172px",
            border: '2px solid #821FFF',
            borderRadius: "10px",
            // marginLeft: '100px',
            // marginRight: '100px',
            justifyContent: 'center',
          }}
        >
          {'Return to SoulSwap'}
        </div>
      </a>
      <div
        style={{
          border: "4px solid #821FFF",
          borderRadius: "10px",
          marginTop: "-172px",
        }}
      >
        <SquidWidget
          config={config}
        />
      </div>

    </div>
  );
}
