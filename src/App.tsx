import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

function App() {
  return (
    <ConfigProvider
      modal={{
        mask: {
          blur: false,
        },
      }}
      drawer={{
        mask: {
          blur: false,
        },
      }}
      tag={{
        styles: {
          root: {
            marginInlineEnd: 8,
          },
        },
      }}
      locale={zhCN}
    >
      <div className="text-red-500">App</div>
    </ConfigProvider>
  );
}

export default App;
