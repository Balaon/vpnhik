import { paths } from '@pages/paths';

import { Link } from '@shared/routes';

import { Pages } from './router';

export const RoutedPages = () => {
  return (
    <>
      <Link to={paths.main}></Link>
      <Pages />
    </>
  );
};
