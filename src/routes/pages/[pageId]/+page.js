export function load({ params }) {
  console.log(JSON.stringify(params))
  return {
    pageId: params.pageId
  }
}
