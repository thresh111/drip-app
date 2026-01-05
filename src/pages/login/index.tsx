import SvgIcon from '@/components/common/svg-icon';
import { Button, Divider, Input } from 'antd';

function Login() {
  return (
    <div className={'relative flex h-screen w-screen flex-col items-center overflow-hidden'}>
      <div className={'absolute top-0 right-0 flex h-16 w-full items-center gap-2 px-8'}>
        <SvgIcon name={'manus-logo'} className={'size-7'} />
        <span className={'text-xl font-bold'}>Drip Finger</span>
      </div>
      <div className={'flex h-full w-full flex-1 flex-col items-center justify-center gap-2'}>
        <SvgIcon name={'manus-logo'} className={'size-14'} />
        <div className={'text-2xl font-bold'}>登录或注册</div>
        <div className={'text-sm text-(--text-secondary)'}>和 Manus 一起开始创作</div>
        <div className={'flex w-[360px] flex-col gap-2'}>
          <Button block> 使用 Google 登录</Button>
          <Button block>使用 Apple 登录</Button>

          <Divider>
            <span className={'text-sm'}>或者</span>
          </Divider>

          <Input placeholder={'请输入您的邮箱地址'} />
          <Button type={'primary'}>登录</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
