import Renderer from '../renderer/renderer'

let rendererRef = null

const getRenderer = (store) => {
  rendererRef = rendererRef || new Renderer(store)

  return (rendererRef)
}

export default getRenderer
