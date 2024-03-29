import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join us - DevAlliance'
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {children}
      <div className="text-slate-500 mt-3 text-center text-sm lg:text-xs">
        <h2 className="text-center">
          {`Just testing things out? Feel free to login with email adress and use testing
                    credentials:`}
        </h2>
        <p>
          {`Email adress: `}
          <span className="select-all font-bold">{`selfspace.test@gmail.com`}</span>
        </p>
        <p>
          {`Password: `}
          <span className="select-all font-bold">{`selfspacetesting789`}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
