'use server'

import { auth } from "@/auth"
import { db } from "@/lib/db"

export async function getUserById(id: string) {
    try {
        const user = await db.user.findUnique({
            where : {id},
            include: {
                accounts: true
            }
        })
        return user
    } catch (error) {
        console.log(error)
        return null 
    }
}

export async function getAccountByUserId(userId:string){
    try {
        const account = await db.account.findFirst({
            where: {userId}
        })

        return account
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function currentUser(){
    const user = await auth()
    return user?.user
}