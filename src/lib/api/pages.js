import { catchError, map, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'

export const getPages = () => ajax.getJSON("http://localhost:4000/api/pages").pipe(
  map(({ pages }) => pages),
  catchError(error => {
    return of(error)
  })
)

export const getBlocks = pageId => ajax.getJSON(`http://localhost:4000/api/pages/${pageId}/blocks`)
