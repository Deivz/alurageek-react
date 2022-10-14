import styles from './adicionarProduto.module.css';
import { TextField } from '@mui/material';
import BotaoPrimario from '../../components/BotaoPrimario/index';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CampoErro from '../../components/CampoErro';
import BotaoEnviarArquivo from '../../components/BotaoEnviarArquivo';
import ErroImagem from '../../components/ErroImagem';
import { useState } from 'react';

export default function AdicionarProduto() {

    let validacao = yup.object().shape({
        imagem: yup.mixed().required()
        .test('name', 'O produto precisa ter uma imagem.', value => {
            console.log(value)
            return value[0] && value[0].name !== '';
        })
        .test('fileSize', 'O arquivo precisa ser menor que 1.5Mb.', value => {
            return value[0] && value[0].size <= 1500000;
        })
        .test('type', 'Somente imagens são permitidas.', value => {
            return value[0] && value[0].type.includes('image');
        }),
        categoria: yup.string().required().max(20),
        nomeProduto: yup.string().required().max(20),
        preco: yup.number().transform(value => (isNaN(value) ? undefined : value)).required().typeError().max(9999999999).positive(),
        descricao: yup.string().required().max(150),
    });

    const [produtos, setProdutos] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validacao)
    }, []);

    function cadastrarProduto(produto){
        // console.log(document.getElementById('imagem').files[0])
        setProdutos(produto);
    }

    return (
        <section>
            <div className={`${styles.adicionarProduto} container`}>
                <h3>Adicionar novo produto</h3>
                <form id="formulario" className={styles.formulario__produto} onSubmit={handleSubmit(cadastrarProduto)}>
                    <fieldset>
                        <BotaoEnviarArquivo register={register} name='imagem' />
                        {errors?.imagem?.message && <ErroImagem>{errors.imagem.message}</ErroImagem>}
                        <TextField
                            name='categoria'
                            {...register('categoria')}
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
                        {errors?.categoria?.message && <CampoErro type={errors.categoria.type} field="categoria" />}
                        <TextField
                            name='nomeProduto'
                            {...register('nomeProduto')}
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
                        {errors?.nomeProduto?.message && <CampoErro type={errors.nomeProduto.type} field="nomeProduto" />}
                        <TextField
                            name='preco'
                            {...register('preco')}
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
                        {errors?.preco?.message && <CampoErro type={errors.preco.type} field="preco" />}
                        <TextField
                            name='descricao'
                            {...register('descricao')}
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
                                    label: { fontFamily: 'Raleway', fontSize: 16, opacity: 0.6 }
                                }
                            }
                        />
                        {errors?.descricao?.message && <CampoErro type={errors.descricao.type} field="descricao" />}
                        <BotaoPrimario classe='adicionar' texto='Adicionar produto' tipo='submit' />
                    </fieldset>
                </form>
            </div>
        </section>
    );
}