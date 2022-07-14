import Api from '../Api';


export async function buscarTodasFrutas(){
    try{
        const resultado = await Api.get(`/hf`);
        return resultado.data;
    } catch(error){
        console.log(error);
        return[];
    }
}

export async function salvarNovaFruta(idp,frutap,valorp,fotop){
    try{
        await Api.post(`/hf`,{
        id: idp,
        fruta: frutap,
        valor: valorp,
        foto: fotop
    });
    return'Sucesso';

    }catch(error){
        console.log();
        return[];
    }
}
export async function alterarFrutas(idp,frutap,valorp,fotop){
    try{
        await Api.put(`/hf/${idp}`,
        {
            id: idp,
            fruta: frutap,
            valor: valorp,
            foto: fotop,
        });
        return 'Sucesso';
    }catch(error){

        console.log(error)
        return[];
    }
}
export async function deletarFrutas(idp){
    try {
        await Api.delete(`hf/${idp}`);
        return 'Sucesso';
    } catch (error) {
        console.log(error);
        return'error';
    }
}