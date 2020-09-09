export interface IGridDefinition {
    records: GridRecords[];
}

interface GridRecords {
    summary: string;
    labels: string[];
    values: string[];
}
