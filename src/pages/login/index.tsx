import SvgIcon from '@/components/common/svg-icon';

function Login() {
  return (
    <div className={'relative flex h-screen w-screen flex-col items-center overflow-hidden'}>
      <div className={'absolute top-0 right-0 flex h-16 w-full items-center gap-2 px-8'}>
        <SvgIcon name={'manus-logo'} className={'size-7'} />
        <span className={'text-xl font-bold'}>Drip Finger</span>
      </div>
      <div className={'flex h-full w-full flex-1 flex-col items-center justify-center gap-2'}>123123</div>
    </div>
  );
}

export default Login;
