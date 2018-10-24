import { path, namespace, grid, form, meta, id } from 'src/domains/admin/empresa/model'
import { crud } from 'genesis/infra/router/resources'

export default crud(path, namespace, grid, form, meta, id)
