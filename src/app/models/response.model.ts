export interface ResponseModel<DataType> {
  data: DataType
  message: string
  status: boolean
}
