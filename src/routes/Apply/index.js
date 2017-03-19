import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'apply',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Apply = require('./containers/ApplyContainer').default
      const reducer = require('./modules/apply').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'apply', reducer })

      /*  Return getComponent   */
      cb(null, Apply)

    /* Webpack named bundle   */
    }, 'apply')
  }
})
