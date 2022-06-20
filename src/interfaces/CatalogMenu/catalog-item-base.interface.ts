export interface CatalogItem{
  id: number,
  icon?: any,
  label: string,
  url: string,
  position: number,
  column?: number,
  isActive?: boolean,
  children?: CatalogItem[]
}
