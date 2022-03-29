import { Link } from "gatsby"
import React from "react"
import { Flex } from "theme-ui"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Dataleaks = () => {
  return (
    <Layout>
      <Seo title="Vazamento de Dados" />
      <Flex
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          textAlign: "justify",
          flexDirection: "column",
        }}
      >
        <div>
          <h1>Vazamento de dados</h1>
          Por mais que nos protejarmos das diversas formas, ainda estamos reféns
          a possíveis vazamento de dados de empresa que utilizamos os serviços.
          Empresas como Facebook, Yahoo e Twitter já foram vítimas de ataques e
          dados de seus usuários foram expostos na internet. Como já descrito no
          nosso artigo sobre <Link to="/posts/senhas">Senhas</Link>, estes
          vazamento é um dos motivos por quais temos que atualizar suas senhas
          regularmente e não utilizar senhas repetidas entre sites e serviços.
          Outra dica importante que damos para averiguar sua segurança, é
          verificar se seus dados já foram expostos em alguns destes vazamentos
          que ocorreram aos longos dos anos e nos que estão acontecendo agora.
          Muitas ferramentas online permitem que você utilize seu e-mail para
          verificar se você está presente em algum vazamento. Abaixo seguem
          alguns que você pode utilizar
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <a href="https://haveibeenpwned.com/" target="_blank">
                ';--have i been pwned?
              </a>
            </li>
            <li>
              {" "}
              <a href="https://monitor.firefox.com/" target="_blank">
                Firefox Monitor
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>O que fazer se algum dado seu foi vazado?</h3>
          Mude imediatamente a senha do serviço que seus dados foram vazados, e
          em todos outros cantos que você use a mesma senha ou parecida. Caso
          suas informações de contato também sido vazadas, dobre seu cuidado
          para ataques de phishing que possam vir a acontecer.
        </div>
      </Flex>
    </Layout>
  )
}

export default Dataleaks
