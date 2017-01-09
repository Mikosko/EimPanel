/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T11:00:20+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-06T17:27:04+01:00
*/

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'Dashboard',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Dashboard = require('./Dashboard').default
      const reducer = require('./modules/Dashboard').default

      injectReducer(store, { key: 'Dashboard', reducer })
      cb(null, Dashboard)

    }, 'Dashboard')
  }
})
