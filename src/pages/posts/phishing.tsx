import React from "react"
import { Flex } from "theme-ui"

import Seo from "../../components/seo"
import Layout from "../../components/layout"

const Phishing = () => {
  return (
    <Layout>
      <Seo title="Phishing" />
      <Flex
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          textAlign: "justify",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <h1>Phishing: O que é? Como se proteger?</h1>
          Phishing é um crime cibernético que consiste em enganar as pessoas
          através da engenharia social, para que entreguem suas informações
          confidenciais, como número de cartão e senhas. É um dos tipos mais
          simples de cibercrime e também um dos mais comuns, perigosos e
          eficientes. Criminosos que praticam phishing não precisam de
          conhecimento técnico ou de algoritmos maliciosos, usam apenas de
          manipulação da mente humana. Nem sempre é fácil reconhecer uma
          tentativa de phishing, pois ela pode vir de várias formas diferentes e
          com técnicas diferentes. Vamos mostrar algumas dos tipos mais comuns e
          como reconhê-los.
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Ofertas boas demais para serem verdade</h3>
          Muito comum de ser compartilhado por meio de anúncios em sites
          duvidosos e em postagens de redes socias, ofertas muito boas para
          serem de verdade. Geralmente anunciando que você ganhou algum aparelho
          muito caro ou muito dinheiro. Não se engane, nada é de graça e ofertas
          assim são apenas uma maneira de lhe enganar para que ceda seus dados
          ou clique em algum link duvidoso. Por isso, sempre evite em clicar em
          anúncios do tipo e quando se tratar de campanhas de promoção, primeiro
          pesquise sua veracidade em sites confiáveis.
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Contatos urgentes ou ameaçadores</h3>
          Conhecendo a mente humana, muitos destes criminosos usam de uma
          linguagem com conotação que há uma urgência ou algo muito ameaçador
          acontecendo, e para resolver a situação você precisa passar seus dados
          logo ou clicar em algum link que foi enviado. Estes contatos
          geralmente são feitos por mensagem, e-mail ou ligação. A primeira
          regra pra estes casos, é entender que bancos ou empresas nunca irão
          pedir dados privados seus desta maneira, como seus documentos e nunca,
          em hipótese nenhuma, você deve compartilhar senhas ou informações de
          login. Mesmo que você tenha recebido uma mensagem de uma pessoa muito
          próxima, lembre-se: eles também podem ter sido enganados ou hackeados.
          E é por isso que você deve ser cuidadoso em qualquer situação. Se
          receber links para clicar, cheque se o domínio do site realmente
          corresponde com o da empresa que a pessoa diz ser, ou se é um
          estranho/desconhecido. Caso detecte, pare o contato e reporte da
          maneira que for possível este contato.
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Sempre desconfie!</h3>
          Sempre desconfie de formulários, e-mails, telefonemas e outros tipos
          de contatos em que estão pedindo muitas informações sem um motivo
          plausível. Nunca compartilhe dados como número de cartão e senhas,
          estas informações nunca devem ser compartilhadas em canais como estes.
          Por último, sempre pergunte qual a necessidade repetina de passar
          estes dados ou de realizar uma determinada ação, procure por provas
          que aquele contato está vindo de uma fonte confiável.
        </div>
        <div>
          <h3>Cuidado ao acessar sua conta de bancos</h3>
          Evite acessar sua conta de bancos e serviços similares em redes
          públicas de Wi-Fi, restaurantes ou na rua. É melhor usar conexões de
          celular ou esperar um pouco do que correr o risco de perder todo o seu
          dinheiro. A questão é que essas redes podem ser criadas pelos
          cibercriminosos, imitando endereços de sites durante a conexão e deste
          modo redirecionam sua navegação para uma página falsa.
        </div>
      </Flex>
    </Layout>
  )
}

export default Phishing
