import supabase from "../config/supabase";

export const fetchPost = async (): Promise<any[]> => {

    const { data, error } = await supabase.from('posts').select("*")
    
    if (error) {
        throw new Error(`Error occurred while fetching : ${error}`);
    }

    return data;
}
    
