import Banner from 'components/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus animes favoritos!</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id="1" titulo="One Piece" capa="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2022/03/one-piece-3-em-1.jpg?resize=500%2C726&ssl=1"/>
        <Card id="2" titulo="Demon Slayer" capa="https://img1.ak.crunchyroll.com/i/spire3/f1fe5c7a43cb2f38f4152a58f89479821554508873_full.jpg"/>
      </section>
    </>
  )
}

export default Favoritos;