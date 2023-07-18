

export default class OrderDto{
    public RequestedAmount : number;
    public TotalFoundAmount : number;

    constructor() {
        this.RequestedAmount = 0;
        this.TotalFoundAmount = 0;
    }
}