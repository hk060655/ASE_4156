export default (store) => ({ // eslint-disable-line no-unused-vars
  path: 'ads_list',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      // require('SRC/components/sub-nav/SubNav')
      cb(null, require('./containers/').default)
    }, 'ads')
  },
  childRoutes: [
    // require('./routes/home/routes.js').default,
    // require('./routes/blog/routes.js').default(store)
  ]
})
