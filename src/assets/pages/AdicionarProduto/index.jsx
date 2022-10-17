import styles from './adicionarProduto.module.css';
import { TextField } from '@mui/material';
import BotaoPrimario from '../../components/BotaoPrimario/index';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CampoErro from '../../components/CampoErro';
import { useContext, useEffect, useState } from 'react';
import { ProdutosContext } from '../../../contexts/ProdutosContext';

export default function AdicionarProduto() {

    let validacao = yup.object().shape({
        imagem: yup.string().required(),
        categoria: yup.string().required().max(20),
        nome: yup.string().required().max(20),
        preco: yup.number().transform(value => (isNaN(value) ? undefined : value)).required().typeError().max(9999999999).positive(),
        descricao: yup.string().required().max(150),
    });

    const { produtos, totalProdutos } = useContext(ProdutosContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validacao)
    }, []);

    function cadastrarProduto(produto) {
        let produtosArmazenados = JSON.parse(sessionStorage.getItem('produtos') || '[]');
        produtosArmazenados.push(produto);
        sessionStorage.setItem('produtos', JSON.stringify(produtosArmazenados));

        const categoriaProduto = produtos.filter(categorias => categorias.titulo === produto.categoria);
        categoriaProduto[0].produtos.push(produto);
        reset();
        alert("Poduto adicionado com sucesso!");
    }

    return (
        <section>
            <div className={`${styles.adicionarProduto} container`}>
                <h3>Adicionar novo produto</h3>
                <form id="formulario" className={styles.formulario__produto} onSubmit={handleSubmit(cadastrarProduto)}>
                    <fieldset>
                        <input hidden name='id' {...register('id')} value={totalProdutos + 1} />
                        <TextField
                            name='imagem'
                            {...register('imagem')}
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
                        {errors?.imagem?.message && <CampoErro type={errors.imagem.type} field="imagem" />}
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
                            name='nome'
                            {...register('nome')}
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
                        {errors?.nome?.message && <CampoErro type={errors.nome.type} field="nome" />}
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