import styles from './login.module.css'
import { TextField } from '@mui/material';
import BotaoPrimario from '../../components/BotaoPrimario';

export default function Login() {
    return (
        <section className={styles.secao__login}>
            <form className={styles.formulario__login}>
                <fieldset>
                    <legend>Iniciar Sessão</legend>
                    <TextField
                        fullWidth
                        size="small"
                        label='Escreva seu e-mail'
                        variant='filled'
                        sx={
                            {
                                "& .MuiInputLabel-root": { color: 'gray' },
                                "& .MuiInputBase-root": { backgroundColor: 'white', ":hover": { backgroundColor: 'white' }, height: 45 },
                                borderRadius: 4,
                                marginTop: 2,
                                marginBottom: 2,
                                label: { fontFamily: 'Raleway', fontSize: 16, opacity: 0.6 }
                            }
                        }
                    />
                    <TextField
                        fullWidth
                        size="small"
                        label='Escreva sua senha'
                        variant='filled'
                        sx={
                            {
                                "& .MuiInputLabel-root": { color: 'gray' },
                                "& .MuiInputBase-root": { backgroundColor: 'white', ":hover": { backgroundColor: 'white' }, height: 45 },
                                borderRadius: 4,
                                marginTop: 2,
                                marginBottom: 2,
                                label: { fontFamily: 'Raleway', fontSize: 16, opacity: 0.6 }
                            }
                        }
                    />
                    <BotaoPrimario classe='entrar' texto='Entrar' tipo='submit' />
                </fieldset>
            </form>
        </section>
    );
}