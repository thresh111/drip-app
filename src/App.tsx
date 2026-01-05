import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { RouterProvider } from 'react-router';
import { HashModalRoot, registerHashModal } from '@/components/common/HashModal';
import { SearchModal } from '@/components/common/HashModal/modals/SearchModal';
import { routes } from '@/router';

registerHashModal('search', SearchModal);

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
      <HashModalRoot />
    </ConfigProvider>
  );
}

export default App;
