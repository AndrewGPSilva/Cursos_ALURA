import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Andrew!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno da plataforma da Alura e faço Analíse e Desenvolvimento de Sistemas pela FAM!
            </p>
            <p className={styles.paragrafo}>
                Minha trajetória com programação começou em 2017 através do curso técnico de Mecatrônica que fiz pelo Senai, lá tive contato com a linguagem C!
            </p>
            <p className={styles.paragrafo}>
                Nesse curso mencionado fui o responsável pelo desenvolvimento de um aplicativo mobile android onde todas as funções do meu TCC iria ser controlado diretamente pelo aplicativo, não só comandos mas também o recebimento de informações como temperatura, umidade e entre outras coisas.
            </p>
            <p className={styles.paragrafo}>
                Após essa experiência tive contato novamente com o mundo da programação através da faculdade que fiz por 1 ano antes de vir de fato para TI, cursei 2 períodos de Bacharel em Matemática onde lá tive contato com a linguagem Python!
            </p>
            <p className={styles.paragrafo}>
                E foi ai que eu percebi que era aquilo que eu desejava para minha vida, não se passou muito tempo e já comecei com cursos referente o front-end! Nessa disciplina onde utilizei Python fui responsável pela criação de um sistema onde o funcionário de RH iria digitar valores e informações sobre um funcionário e com o cálculo iria retornar o valor de aumento através de fórmulas no sistema!

            </p>
            <p className={styles.paragrafo}>
                Desde então, venho me empenhando cada dia mais para me tornar um desenvolvedor Fullstack, até o momento possuo conhecimento em algumas linguagens e banco de dados, mas ainda estou longe do meu objetivo, que é um dia me tornar Senior de uma grande empresa no exterior e para isso, sigo com minha amada rotina de estudos!
            </p>
        </PostModelo>
    )
}