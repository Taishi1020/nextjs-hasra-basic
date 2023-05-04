import { gql } from "@apollo/client";

export const GET_USERS = gql `
  query GetUsers {
    users(order_by: {created_ad: desc}) {
    id
    name
    created_ad
  }
 }
`
export const GET_USERS_LOCAL = gql `
  query GetUsers {
    users(order_by: {created_ad: desc}) @client {
    id
    name
    created_ad
  }
 }
`
export const GET_USERSIDS = gql `
  query GetUsersIds {
    users(order_by: {created_ad: desc})  {
    id
  }
 }
`
export const GET_USER_BY_ID = gql `
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
    id
    name
    created_ad
  }
 }
`

// データ作成
export const CREATE_USER = gql `
  mutation CreateUser($name: String!) {
    insert_users_one(object: {name: $name}) {
    id
    name
    created_ad
   }
  }
`

//ユーザー削除
export const DELETE_USER = gql `
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
    id
    name
    created_ad
  }
  }
`

// アップデーとユーザー
export const UPDATE_USER = gql `
  mutation UpdateUser($id: uuid!, $name: String) {
    update_users_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
      id
      name
      created_ad
    }
  }
`
