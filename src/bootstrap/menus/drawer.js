import { group, menu, item } from 'genesis/modules/dashboard'

import { menu as home } from 'src/app/modules/dashboard/model/home'
import { menu as forms } from 'src/domains/demo/forms/model'
import { menu as graphics } from 'src/domains/demo/graphics/model'
import { menu as user } from 'src/domains/admin/user/model'
import { menu as permission } from 'src/domains/admin/permission/model'
import { menu as organization } from 'src/domains/admin/organization/model'
import { menu as category } from 'src/domains/general/category/model'
import { menu as empresa } from 'src/domains/admin/empresa/model'

export default (to) => [
  home(to),
  forms(to),
  graphics(to),
  menu('admin', 'Admin', 'format_quote', [
    organization(to),
    permission(to),
    user(to),
    empresa(to)
  ]),
  category(to)
]
