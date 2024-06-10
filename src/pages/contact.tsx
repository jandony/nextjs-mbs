import { Spin } from 'antd'
import dynamic from 'next/dynamic'

const ContactPage = dynamic(() => import('./main/ContactPage'), {
  loading: () => (
    <>
      <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
        <Spin />
      </div>
    </>
  ),
});

const Contact = () => {
  return (
    <ContactPage />
  );
};

export default Contact;
