import './botaoPrimario.css';

export default function BotaoPrimario({texto, classe}){
    
    return(
        <>
            <input type='button' className={`botaoPrimario ${classe}`} value={texto} />
        </>
    );
}