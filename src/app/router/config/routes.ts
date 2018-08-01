import { IAppRoute } from '../interfaces';
import paths from './paths';

// Route Components
import { Contact, Home } from '@pages';

const contact: IAppRoute = {
  component: Contact,
  path: '/home/children',
};

const home: IAppRoute = {
  component: Home,
  nested: [
    contact,
  ],
  path: paths.home,
};


const routes: IAppRoute[] = [
  home,
  contact,
];

export default routes;
