/*
* @Author: dingyiming
* @Date:   2016-04-21 22:29:14
* @Last Modified by:   dingyiming
* @Last Modified time: 2016-04-21 22:38:13
*/

'use strict';

import Addcommunity from './__systemInit/views/Addcommunity'
import Testview from './__systemInit/views/Testview'
import Notfound from './__common/views/404.vue'

export default function(router){
    router.map({
    '/':{
        component: Addcommunity
    },
    '/test':{
        component: Testview
    },
    /* 404路由 */
    '*': {
        component: Notfound
    }

})
}
