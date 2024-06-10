export interface IOrder{
    id: number,
    client_id: number,
    employee_id: number,
    payment_date: number,
    deposit_date: number,
    pickup_date: number,
    total_price_ht: number,
    total_price_ttc: number,
    state_id: number,
}