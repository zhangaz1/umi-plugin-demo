// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

import { resetMainPath } from '@alitajs/utils';

export default (api: IApi) => {
  api.logger.info('use plugin');

  api.modifyHTML($ => {
    $('body').prepend(`<h1>hello umi plugin!!</h1>`);
    return $;
  });

  api.describe({
    key: 'mainPath',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
  });

  api.logger.info(api.userConfig);

  if (api.userConfig.mainPath) {
    api.modifyRoutes((routers: any[]) =>
      resetMainPath(routers, api.config.mainPath),
    );
  }
};
