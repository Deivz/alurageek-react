import '../../../index.css';
import styles from './adicionarProduto.module.css';
import titulo from '../../components/Secao/secao.module.css';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import BotaoPrimario from '../../components/BotaoPrimario/index';

export default function AdicionarProduto() {
    return (
        <section className={styles.secao__adicionarProduto}>
            <div className={`${styles.container__adicionarProduto} container`}>
                <h2 className={titulo.secao__produtos__titulo}>Adicionar novo produto</h2>
                <form className={styles.formulario__produto}>
                    <fieldset>
                        <TextField
                            fullWidth
                            size="small"
                            label='URL da imagem'
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
                            label='Categoria'
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
                            label='Nome do produto'
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
                            label='Preço do produto'
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
                            label='Descrição do produto'
                            variant='filled'
                            multiline
                            rows={3}
                            sx={
                                {
                                    "& .MuiInputLabel-root": { color: 'gray' },
                                    "& .MuiInputBase-root": { backgroundColor: 'white', ":hover": { backgroundColor: 'white' } },
                                    borderRadius: 4,
                                    marginTop: 2,
                                    marginBottom: 2,
                                    label: { fontFamily: 'Raleway', fontSize: 16 }
                                }
                            }
                        />
                        <Link to='/produtos'><BotaoPrimario classe='adicionar' texto='Adicionar produto' tipo='button' /></Link>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}