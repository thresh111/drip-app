import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { RouterProvider } from 'react-router';
import { routes } from '@/router';

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
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}

export default App;
