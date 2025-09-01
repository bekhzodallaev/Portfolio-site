import supabase from "../config/supabase"

export const createPost = async (post: any):Promise<any[]> =>{
    const { data, error } = await supabase.from("posts")
        .insert([post])
        .select();
    
    if (error) {
     throw new Error(error.message)
    }
    
    return data;
}