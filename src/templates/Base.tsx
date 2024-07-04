import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { PassGen } from './PassGen'

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <PassGen />
  </div>
);

export { Base };
