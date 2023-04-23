type PaginationReq = {
    page: number;
    size: number;
}
  
type PaginationResp = {
    totalElements: number;
    data: any[]; // or specify the type of the array elements
}
