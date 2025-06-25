import supabase from "../config/supabase"

export const createMessage = async (message: any):Promise<any[]> =>{
    const { data, error } = await supabase.from("contact_messages")
        .insert([message])
        .select();
    
    if (error) {
     throw new Error(error.message)
    }
    
    return data;
}