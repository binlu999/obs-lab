export type UserProfile={
    id:string, //partition key
    email:string, //index partion key
    cognito_id?:string,
    last_name?:string,
    first_name?:string,
    other_name?:string
}