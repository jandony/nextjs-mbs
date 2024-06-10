import { Spin } from 'antd'
import dynamic from 'next/dynamic'

const AboutPage = dynamic(() => import('./main/AboutPage'), {
  loading: () => (
    <>
      <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
        <Spin />
      </div>
    </>
  ),
});

const About = () => {
  return (
    <AboutPage />
  );
};

export default About;
