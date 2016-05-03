/**
 * Tasks state definition.  This is a simple CRUDL implementation, no search
 * paging or sorting.
 *
 * @namespace tasks
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import './add'
import './edit'
import './list'

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('tasks', {
      parent: 'authenticated',
      abstract: true,
      template: '<ui-view></ui-view>',
      url: '/tasks'
    })
  })
