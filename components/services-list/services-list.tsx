import ServiceItem from '../service-item';

import { Service } from '../../types/service';

import styles from './services-list.module.scss';

type Props = {
  services: Service[];
};

const ServicesList = ({ services }: Props) => {
  return (
    <div className={styles.container}>
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
