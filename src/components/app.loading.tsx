import { Spin } from "antd";

interface LoadingProps {
  children: React.ReactNode;
  isLoading: boolean;
  delay?: number;
}

const Loading = ({ children, isLoading, delay = 200 }: LoadingProps) => {
  return (
    <Spin spinning={isLoading} delay={500}>
      {children}
    </Spin>
  );
};

export default Loading;
