interface IDatasets {
  data: number[],
  backgroundColor: string[],
  cutout: number
}

interface IData {
  labels: string[],
  datasets: IDatasets[]
}

export interface IExpensesProps {
  data: IData,
}