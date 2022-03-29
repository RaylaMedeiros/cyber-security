import React from "react"
import { Flex } from "theme-ui"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SenhasSeguras = () => {
  return (
    <Layout>
      <Seo title="Senhas Seguras" />
      <Flex
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          textAlign: "justify",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <h1>Como deixar minhas senhas mais seguras?</h1>
          Enquanto boa parte das pessoas já ouviram alguns conceitos básicos de
          segurança de senha, como usar senhas com letras e números, muitos
          ainda insistem em ignorar por achar muito complicado criar e lembrar
          senhas complexas. Usamos a mesma senha para diferente serviços ou com
          informações muito fáceis de serem descobertas por hackers. Senhas são
          importantes para a proteção da nossa identidade e privacidade na
          internet e em bancos, por isso listaremos aqui algumas dicas de como
          criar e gerenciar suas senhas da maneira mais segura possível, se
          protegendo de possíveis ataques cibernéticos.
        </div>{" "}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Evite senhas óbvias</h3>
          Provavelmente você já ouviu isso por ai, mas é sempre importante
          reforçar,{" "}
          <b>
            <i>evite senhas óbvias!</i>
          </b>{" "}
          Muitas pessoas ainda utilizam data de aniversários, seus próprios
          nomes, senhas muito usadas e fáceis de sofrer ataques por criminosos,
          como: `1234`, `1111`, `senha`, etc. Senhas que utilizam dados
          pessoais, como datas e nomes, ou com números repetidos/sequenciais são
          muito fáceis de serem descobertas por hackers, por isso as evite.
          Prefira senhas não muito óbvias e complexas.
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Senhas complexas</h3>
          Senhas muito simples e com poucos caracteres são rapidamente hackeadas
          através de algoritmos que tentam várias combinações. Quanto maior for
          a complexidade da sua senha, mais se torna inviável que esses
          algoritmos a descubram. Existem diversos gereadores de senhas que
          geram senhas complexas como estas, assim você não terá dificuldade de
          elaborar senhas como estas. Abaixo vemos uma tabela que mostra quanto
          tempo um hacker levaria pra descobrir sua senha dependendo da
          complexidade dela.
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <img src="https://external-preview.redd.it/Ipek1FFikrsqeFPQa-HRcfsOFNoU3yLF8QDAW35ai7Y.jpg?auto=webp&s=2d54098cec1401061edc6d17c995cc4b871844c0" />
          </div>
          Analisando a tabela percebemos que senhas com menos de 6 caracteres
          são descobertas instantaneamente independente de sua complexidade.
          Também notamos que a partir de 12 caracteres a senha começa a se
          tornar mais segura e que se utilizarmos a combinação de letras,
          números e caracteres especiais vai se tornando praticamente impossível
          ser descoberta.
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Não reutilize senhas entre serviços</h3>
          Mesmo que você siga os passos anteriores, você pode estar sujeito à
          vazamento de dados de serviços que utiliza, que podem expor sua senha.
          Utilizar a mesma senha para todos os serviços e sites que utiliza se
          apresenta como um grande perigo em situações como estas. Basta o
          criminoso descobrir sua senha em um local e ele conseguirá acessar
          outros serviços atrelados a você. Por isto, prefira criar senhas
          únicas para cada serviço e site que utiliza, principalmente aqueles
          que contém seus dados mais importantes. Além disso, especialistas de
          segurança aconselham modificar suas senhas, principalmente dos
          serviços mais críticos que você utiliza, regularmente a cada 90 dias.
        </div>
        <div>
          <h3>Use um gerenciador de senha</h3>
          Entendemos que nos dias de hoje acessamos dezenas de sites e serviços
          pelos nossos computadores e celulares, tornando-se difícil criar
          senhas complexas e lembrá-las para todos os serviços. Por isso,
          recomendados o uso de gerenciadores de senhas, que são serviços
          extremamente seguros que se encarregam de guardar suas senhas, e por
          vezes de gerá-las e avisar quando precisa de uma atualização também.
          Abaixo, segue alguns gerenciadores de senhas recomendados:
          <ul style={{ marginTop: "1rem" }}>
            <li>Bitwarden</li>
            <li>1Password</li>
            <li>Dashlane Lastpass</li>
          </ul>
        </div>
        <div>
          <h3>Ative Autorização de dois ou múltiplos fatores (MFA)</h3>
          Você pode utilizar a autorização de múltiplos fatores para melhorar a
          segurança das suas contas mais importantes. Na MFA, você utiliza a
          combinação de duas ou mais formas de autenticação para garantir o
          acesso a sua conta. Geralmente, pode ser a combinação de sua senha
          junto com sua digital ou reconhecimento facial, que já é bastante
          presente nos celulares mais modernos. Mas também pode utilizar outros
          recursos, como tokens e aplicativos de autorização, como o{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"
            target="_blank"
          >
            Google Authenticator
          </a>
          . MFA torna a vida dos cibercriminosos mais complicada e inviável de
          conseguir acesso a sua conta, já que agora tem mais de um recurso para
          bloquear o acesso.
        </div>
      </Flex>
    </Layout>
  )
}

export default SenhasSeguras
