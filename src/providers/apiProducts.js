import supabase from "./supabase"
export async function getProducts(){
    
    let { data: product, error } = await supabase
    .from('product')
    .select('*')

}