export interface IColumn{
    name: string;
    label: string;
    field: string ;
    sortable?: boolean;
    order?: string|null;
    style?: (value? : any) => string | string
    format?: (value? : any) => string | string
}