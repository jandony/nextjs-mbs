import { Spin } from 'antd'
import dynamic from 'next/dynamic'

const ServicesPage = dynamic(() => import('./main/ServicesPage'), {
  loading: () => (
    <>
      <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
        <Spin />
      </div>
    </>
  ),
});

const Services = () => {
  return (
    <ServicesPage />
  );
};

export default Services;
