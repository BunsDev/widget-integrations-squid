import { SquidWidget } from "@0xsquid/widget";
import { AppConfig } from "@0xsquid/widget/widget/core/types/config";

import styles from "../styles/Home.module.css";

export default function Home() {
  const config = {
    companyName: "Test Widget",
    integratorId: "example-swap-widget",
    slippage: 3,
    instantExec: true,
    infiniteApproval: false,
    apiUrl: "https://dev.api.0xsquid.com",
  } as AppConfig;

  return (
    <div
      // className={styles.container}
      style={{
        display: "grid",
        // gridAutoFlow: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <SquidWidget config={config} />
    </div>
  );
}
