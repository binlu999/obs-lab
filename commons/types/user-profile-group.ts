export type UserProfileGroup={
    user_id:string, //Partion key
    email:string, //index partition key
    group_id:"CONTACTS"|"MEMBER"|"ADMIN", //sort key, index sort key
}